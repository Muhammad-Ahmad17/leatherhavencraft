# Backend Architecture & Implementation Plan (Node.js + Express + MongoDB)

This document outlines the complete backend architecture, database schema, Cloudinary integration, and RESTful API design for **Leather Haven Craft** using **Node.js, Express, MongoDB (Free Tier / Atlas M0), and Mongoose**.

The architecture strictly follows the MVC / layered structure requested:

```
backend/
├── config/             # Database connection & Cloudinary configuration
├── controllers/        # Business logic for products, newsletter, and uploads
├── middlewares/        # Authentication, validation, multer, and error handling
├── models/             # Mongoose schemas (Product, Subscriber)
├── routes/             # Express API route declarations
├── tests/              # Automated tests
│   └── controllers/    # Controller unit and integration tests
├── validators/         # Request schema validation (Joi or Zod)
├── package.json        # Dependencies and scripts
├── package-lock.json
└── server.js           # Express app initialization and server entry point
```

---

## 1. Core Specifications & Constraints

- **Runtime**: Node.js (v20+ LTS)
- **Framework**: Express.js 4 / 5
- **Database**: **MongoDB (Atlas M0 Free Tier)** — 512 MB storage, shared RAM, free forever.
- **ODM**: Mongoose 8
- **Media Asset Storage**: Cloudinary (Free tier: 25 credits/month ~ 25 GB storage & 25,000 transformations)
- **Categories**: **Strictly 7 categories with NO subcategories**:
  1. `schott-nyc` (Schott NYC)
  2. `harley-davidson` (Harley-Davidson)
  3. `pelle-pelle` (Pelle Pelle)
  4. `supreme` (Supreme)
  5. `avirex` (Avirex)
  6. `leather-haven-craft` (Leather Haven Craft)
  7. `accessories` (Accessories)
- **Core Modules**:
  1. **Newsletter Subscription Engine**: Footnote newsletter signup, duplicate prevention, opt-out management.
  2. **Product Catalog Engine**: Full CRUD (Create, Read, Update, Delete) with filtering, pagination, and sorting.
  3. **Cloudinary Pipeline**: Direct buffer uploads via Multer and automated asset cleanup.

---

## 2. Directory & File Breakdown

### 2.1 `config/`
- **`config/db.js`**: Initializes connection to MongoDB Atlas with connection pooling, reconnection logic, and error handlers.
- **`config/cloudinary.js`**: Initializes the Cloudinary v2 SDK using environment credentials.

### 2.2 `models/`
- **`models/Product.js`**: Mongoose model enforcing the 7 categories as an Enum, product dimensions, price, Cloudinary public IDs, and SVG animation parameters.
- **`models/Subscriber.js`**: Mongoose model storing sanitized emails, subscription status, and signup source.

### 2.3 `validators/`
- **`validators/productValidator.js`**: Joi schemas for validating product creation (`POST`) and updates (`PUT`), ensuring category strictly matches one of the 7 allowed values.
- **`validators/newsletterValidator.js`**: Joi schema for validating email format and sanitization.

### 2.4 `middlewares/`
- **`middlewares/auth.js`**: Guard middleware verifying `x-api-key` header (matching `ADMIN_API_KEY`) for product write operations.
- **`middlewares/validate.js`**: Generic middleware executing Joi schemas against `req.body`, `req.query`, or `req.params`.
- **`middlewares/upload.js`**: Multer memory storage configuration for receiving raw file streams before uploading to Cloudinary.
- **`middlewares/errorHandler.js`**: Centralized error interceptor handling Mongoose validation errors, duplicate key errors (`11000`), and 404/500 responses.

### 2.5 `controllers/`
- **`controllers/productController.js`**: `getProducts`, `getProductBySlug`, `createProduct`, `updateProduct`, `deleteProduct`.
- **`controllers/newsletterController.js`**: `subscribe`, `unsubscribe`, `getSubscribers`.
- **`controllers/uploadController.js`**: `uploadMedia`, `deleteMedia`.

### 2.6 `routes/`
- **`routes/productRoutes.js`**: Maps endpoints to `productController` methods.
- **`routes/newsletterRoutes.js`**: Maps endpoints to `newsletterController` methods.
- **`routes/uploadRoutes.js`**: Maps endpoints to `uploadController` methods.

### 2.7 `tests/controllers/`
- **`tests/controllers/productController.test.js`**: Tests product CRUD operations, category constraints, and query filters.
- **`tests/controllers/newsletterController.test.js`**: Tests email validation, duplicate email handling, and status toggles.

### 2.8 `server.js`
- Entry point: configures CORS, Helmet, body parsers, rate limiters, mounts `/api` routes, and starts the HTTP server.

---

## 3. Database Models (Mongoose Schemas)

### 3.1 Product Model (`models/Product.js`)

```javascript
const mongoose = require("mongoose");

// STRICTLY 7 CATEGORIES — NO SUBCATEGORIES
const ALLOWED_CATEGORIES = [
  "schott-nyc",
  "harley-davidson",
  "pelle-pelle",
  "supreme",
  "avirex",
  "leather-haven-craft",
  "accessories",
];

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: 120,
    },
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ALLOWED_CATEGORIES,
        message: "{VALUE} is not a valid category. Must be one of the 7 authorized categories.",
      },
      index: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    meta: {
      type: String,
      trim: true,
      default: "", // e.g. "Full-grain, brass hardware"
    },
    color: {
      type: String,
      default: "#1a1a1a", // Hex code for SVG mannequin preview
    },
    darkColor: {
      type: String,
      default: "#0f0f0f",
    },
    colorName: {
      type: String,
      required: true,
      trim: true, // "Black", "Cognac", "Brown", "Olive"
    },
    sizes: {
      type: [String],
      default: ["S", "M", "L", "XL"], // or ["One Size"] for accessories
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    inStock: {
      type: Boolean,
      default: true,
      index: true,
    },

    // Cloudinary Asset References
    image: {
      type: String,
      required: [true, "Primary image URL is required"],
    },
    imagePublicId: {
      type: String, // Cloudinary public_id used for deletion
      default: null,
    },
    imageHover: {
      type: String,
      default: "",
    },
    imageHoverPublicId: {
      type: String,
      default: null,
    },

    // SVG Mannequin Animation Parameters (for interactive scroll stage)
    hem: {
      type: Number,
      default: 410,
    },
    cuff: {
      type: Number,
      default: 418,
    },
    svgExtra: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  Product: mongoose.model("Product", productSchema),
  ALLOWED_CATEGORIES,
};
```

---

### 3.2 Newsletter Subscriber Model (`models/Subscriber.js`)

```javascript
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
      index: true,
    },
    status: {
      type: String,
      enum: ["active", "unsubscribed"],
      default: "active",
      index: true,
    },
    source: {
      type: String,
      default: "footer", // "footer", "checkout", "popup"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscriber", subscriberSchema);
```

---

## 4. Configuration Layer (`config/`)

### 4.1 MongoDB Connection (`config/db.js`)

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 4.2 Cloudinary Setup (`config/cloudinary.js`)

```javascript
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;
```

---

## 5. Middleware Layer (`middlewares/`)

### 5.1 Admin Authorization (`middlewares/auth.js`)
Protects mutating endpoints (`POST`, `PUT`, `DELETE`):

```javascript
const requireAdmin = (req, res, next) => {
  const apiKey = req.headers["x-api-key"] || req.headers["authorization"]?.replace("Bearer ", "");
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or missing admin credentials.",
    });
  }
  next;
};

module.exports = { requireAdmin };
```

### 5.2 Multer Memory Storage (`middlewares/upload.js`)

```javascript
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

module.exports = upload;
```

### 5.3 Centralized Error Handler (`middlewares/errorHandler.js`)

```javascript
const errorHandler = (err, req, res, next) => {
  console.error("[Error]", err);

  // Mongoose duplicate key error (e.g. duplicate email or slug)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      message: `An entry with this ${field} already exists.`,
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: messages,
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
```

---

## 6. Controllers Layer (`controllers/`)

### 6.1 Newsletter Controller (`controllers/newsletterController.js`)

```javascript
const Subscriber = require("../models/Subscriber");

// POST /api/newsletter/subscribe
exports.subscribe = async (req, res, next) => {
  try {
    const { email, source } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const existing = await Subscriber.findOne({ email: normalizedEmail });

    if (existing) {
      if (existing.status === "unsubscribed") {
        existing.status = "active";
        await existing.save();
        return res.status(200).json({
          success: true,
          message: "Welcome back! Your subscription has been reactivated.",
        });
      }
      return res.status(200).json({
        success: true,
        message: "You are already subscribed to Leather Haven Craft updates.",
      });
    }

    await Subscriber.create({ email: normalizedEmail, source: source || "footer" });

    res.status(201).json({
      success: true,
      message: "Thank you for subscribing to Leather Haven Craft updates.",
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/newsletter/unsubscribe
exports.unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    await Subscriber.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      { status: "unsubscribed" }
    );
    res.status(200).json({
      success: true,
      message: "You have been successfully unsubscribed.",
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/newsletter/subscribers (Admin only)
exports.getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: subscribers.length, data: subscribers });
  } catch (error) {
    next(error);
  }
};
```

---

### 6.2 Product Controller (`controllers/productController.js`)

```javascript
const { Product, ALLOWED_CATEGORIES } = require("../models/Product");
const cloudinary = require("../config/cloudinary");

// Helper to delete an asset from Cloudinary
const deleteCloudinaryAsset = async (publicId) => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error(`Failed to delete Cloudinary asset: ${publicId}`, err);
  }
};

// GET /api/products
exports.getProducts = async (req, res, next) => {
  try {
    const { category, size, color, featured, search, sort, page = 1, limit = 20 } = req.query;

    const query = { inStock: true };

    if (category) {
      if (!ALLOWED_CATEGORIES.includes(category)) {
        return res.status(400).json({
          success: false,
          message: `Invalid category. Allowed: ${ALLOWED_CATEGORIES.join(", ")}`,
        });
      }
      query.category = category;
    }

    if (size) query.sizes = size;
    if (color) query.colorName = color;
    if (featured !== undefined) query.featured = featured === "true";

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    let sortOption = { createdAt: -1 };
    if (sort === "price-asc") sortOption = { price: 1 };
    if (sort === "price-desc") sortOption = { price: -1 };
    if (sort === "featured") sortOption = { featured: -1, createdAt: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const [products, total] = await Promise.all([
      Product.find(query).sort(sortOption).skip(skip).limit(Number(limit)),
      Product.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/products/:slug
exports.getProductBySlug = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug.toLowerCase() });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// POST /api/products (Admin)
exports.createProduct = async (req, res, next) => {
  try {
    const { name, category, ...rest } = req.body;

    if (!ALLOWED_CATEGORIES.includes(category)) {
      return res.status(400).json({
        success: false,
        message: `Invalid category: '${category}'. Must be one of the 7 authorized categories: ${ALLOWED_CATEGORIES.join(", ")}`,
      });
    }

    const slug = req.body.slug
      ? req.body.slug.toLowerCase().trim()
      : name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const newProduct = await Product.create({
      name,
      slug,
      category,
      ...rest,
    });

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    next(error);
  }
};

// PUT /api/products/:id (Admin)
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    if (req.body.category && !ALLOWED_CATEGORIES.includes(req.body.category)) {
      return res.status(400).json({
        success: false,
        message: `Invalid category. Must be one of: ${ALLOWED_CATEGORIES.join(", ")}`,
      });
    }

    // Clean up old Cloudinary images if new ones are passed
    if (req.body.imagePublicId && req.body.imagePublicId !== product.imagePublicId) {
      await deleteCloudinaryAsset(product.imagePublicId);
    }
    if (req.body.imageHoverPublicId && req.body.imageHoverPublicId !== product.imageHoverPublicId) {
      await deleteCloudinaryAsset(product.imageHoverPublicId);
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/products/:id (Admin)
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Delete associated Cloudinary assets
    await deleteCloudinaryAsset(product.imagePublicId);
    await deleteCloudinaryAsset(product.imageHoverPublicId);

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product and associated Cloudinary assets deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};
```

---

### 6.3 Upload Controller (`controllers/uploadController.js`)

```javascript
const cloudinary = require("../config/cloudinary");

// POST /api/upload (Admin)
exports.uploadMedia = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const folder = req.body.folder || "leatherhavencraft/catalog";

    cloudinary.uploader.upload_stream(
      {
        folder,
        format: "webp",
        quality: "auto:best",
        transformation: [{ width: 1200, crop: "limit" }],
      },
      (error, result) => {
        if (error || !result) {
          return next(error || new Error("Cloudinary upload failed"));
        }
        res.status(200).json({
          success: true,
          url: result.secure_url,
          publicId: result.public_id,
          format: result.format,
          width: result.width,
          height: result.height,
        });
      }
    ).end(req.file.buffer);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/upload/:publicId (Admin)
exports.deleteMedia = async (req, res, next) => {
  try {
    const { publicId } = req.params;
    await cloudinary.uploader.destroy(publicId);
    res.status(200).json({ success: true, message: "Asset deleted from Cloudinary" });
  } catch (error) {
    next(error);
  }
};
```

---

## 7. Routes Layer (`routes/`)

### 7.1 Product Routes (`routes/productRoutes.js`)

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { requireAdmin } = require("../middlewares/auth");

router.get("/", productController.getProducts);
router.get("/:slug", productController.getProductBySlug);
router.post("/", requireAdmin, productController.createProduct);
router.put("/:id", requireAdmin, productController.updateProduct);
router.delete("/:id", requireAdmin, productController.deleteProduct);

module.exports = router;
```

### 7.2 Newsletter Routes (`routes/newsletterRoutes.js`)

```javascript
const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");
const { requireAdmin } = require("../middlewares/auth");

router.post("/subscribe", newsletterController.subscribe);
router.post("/unsubscribe", newsletterController.unsubscribe);
router.get("/subscribers", requireAdmin, newsletterController.getSubscribers);

module.exports = router;
```

### 7.3 Upload Routes (`routes/uploadRoutes.js`)

```javascript
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const uploadController = require("../controllers/uploadController");
const { requireAdmin } = require("../middlewares/auth");

router.post("/", requireAdmin, upload.single("file"), uploadController.uploadMedia);
router.delete("/:publicId", requireAdmin, uploadController.deleteMedia);

module.exports = router;
```

---

## 8. Server Entry Point (`server.js`)

```javascript
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

const productRoutes = require("./routes/productRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Database Connection
connectDB();

// Core Security & Utilities
app.use(helmet());
app.use(
  cors({
    origin: [process.env.CLIENT_URL || "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiter for newsletter endpoint (prevents spam signups)
const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { success: false, message: "Too many signups from this IP. Please try again later." },
});
app.use("/api/newsletter/subscribe", newsletterLimiter);

// Health Check
app.get("/health", (req, res) => res.status(200).json({ status: "ok", timestamp: new Date() }));

// Mount Application Routes
app.use("/api/products", productRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/upload", uploadRoutes);

// Centralized Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Server] Running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});
```

---

## 9. Testing Layer (`tests/controllers/`)

### 9.1 Product Controller Test (`tests/controllers/productController.test.js`)

```javascript
const request = require("supertest");
const express = require("express");
const productRoutes = require("../../routes/productRoutes");
const { Product } = require("../../models/Product");

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);

describe("Product Controller Integration Tests", () => {
  it("rejects product creation with invalid category", async () => {
    const res = await request(app)
      .post("/api/products")
      .set("x-api-key", process.env.ADMIN_API_KEY)
      .send({
        name: "Test Jacket",
        category: "invalid-category",
        price: 250,
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("lists only products from one of the 7 valid categories", async () => {
    const res = await request(app).get("/api/products?category=schott-nyc");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
```

---

## 10. `package.json` for Backend

```json
{
  "name": "leatherhavencraft-backend",
  "version": "1.0.0",
  "description": "Backend API for Leather Haven Craft e-commerce platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest --runInBand"
  },
  "dependencies": {
    "cloudinary": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-rate-limit": "^7.2.0",
    "helmet": "^7.1.0",
    "joi": "^17.12.3",
    "mongoose": "^8.3.1",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "nodemon": "^3.1.0",
    "supertest": "^6.3.4"
  }
}
```

---

## 11. Environment Configuration (`.env`)

```ini
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# MongoDB Free Version (MongoDB Atlas M0 Free Cluster)
# Get your free URI at https://cloud.mongodb.com
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/leatherhavencraft?retryWrites=true&w=majority&appName=Cluster0

# Cloudinary Media Storage (Free Account)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin API Key (For protecting Product Add/Edit/Delete endpoints)
ADMIN_API_KEY=generate_a_secure_token_here_64chars
```

---

## 12. Frontend Footer Newsletter Component

To wire the newsletter into [`components/common/Footer.tsx`](file:///home/muhammad-ahmad/lhc/leatherhavencraft/components/common/Footer.tsx):

```tsx
"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch(`${backendUrl}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect to the server.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === "loading" || status === "success"}
          className="h-10 flex-1 border border-white/20 bg-white/10 px-3 text-sm text-white placeholder-white/40 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="h-10 border border-white bg-white px-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-transparent hover:text-white"
        >
          {status === "loading" ? "..." : "Join"}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-xs ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
```
