"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import {
  getAdminToken,
  getAdminUser,
  clearAdminSession,
  adminFetch,
  AdminUser,
  getBackendUrl,
} from "@/lib/adminAuth";

const ALL_AVAILABLE_SIZES = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "One Size",
];

const PRESET_LEATHER_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Dark Brown", hex: "#3a2318" },
  { name: "Cognac", hex: "#8c4a2f" },
  { name: "Tan", hex: "#b98d5c" },
  { name: "Oxblood", hex: "#4a0e17" },
  { name: "Olive", hex: "#5f7040" },
  { name: "Navy", hex: "#243044" },
  { name: "Cream", hex: "#e6dcc8" },
];

interface Product {
  _id: string;
  id?: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  discountPercent?: number;
  meta?: string;
  color?: string;
  colorName: string;
  colors?: Array<{ name: string; hex?: string }>;
  sizes: string[];
  featured: boolean;
  inStock: boolean;
  image: string;
  imageHover?: string;
  images?: string[];
  imagePublicId?: string;
  imageHoverPublicId?: string;
  imagesPublicIds?: string[];
  createdAt: string;
}

interface AdminOrderItem {
  productId?: string;
  name: string;
  slug: string;
  brandName?: string;
  price: number;
  size: string;
  color?: string;
  quantity: number;
}

interface AdminOrder {
  _id: string;
  orderNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  items: AdminOrderItem[];
  totalAmount: number;
  orderStatus: string;
  courier?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  shippingAddress?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  statusHistory?: Array<{ status: string; note: string; timestamp: string }>;
  createdAt: string;
}

interface AdminReview {
  _id: string;
  clientName: string;
  clientLocation?: string;
  rating: number;
  title: string;
  content: string;
  piecePurchased?: string;
  status: "pending" | "approved" | "rejected";
  verifiedPurchase: boolean;
  createdAt: string;
}

interface Subscriber {
  _id: string;
  email: string;
  status: "active" | "unsubscribed";
  source: string;
  createdAt: string;
}

const BRAND_CATEGORIES = [
  { id: "schott-nyc", name: "Schott NYC" },
  { id: "harley-davidson", name: "Harley-Davidson" },
  { id: "pelle-pelle", name: "Pelle Pelle" },
  { id: "supreme", name: "Supreme" },
  { id: "avirex", name: "Avirex" },
  { id: "leather-haven-craft", name: "Leather Haven Craft" },
  { id: "accessories", name: "Accessories" },
  { id: "others", name: "Others" },
];

const BLOG_PRESET_CATEGORIES = [
  "Heritage & History",
  "Care & Restoration",
  "Brand Spotlights",
  "Craftsmanship & Atelier",
  "Style & Fit Guides",
  "Others",
];

interface AdminBlog {
  _id: string;
  id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  featured: boolean;
  isPublished: boolean;
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "catalog" | "blogs" | "reviews" | "subscribers" | "media" | "system">("overview");

  // Catalog State
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [catalogSearch, setCatalogSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Subscribers State
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(true);
  const [subscriberSearch, setSubscriberSearch] = useState("");

  // Modals & Forms
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<{ id: string; name: string } | null>(null);
  const [deletingProduct, setDeletingProduct] = useState(false);
  const [productForm, setProductForm] = useState({
    name: "",
    category: "schott-nyc",
    price: 0,
    discountPercent: 0,
    description: "",
    meta: "",
    color: "#1a1a1a",
    colorName: "Black",
    colors: [] as Array<{ name: string; hex?: string }>,
    sizes: "S, M, L, XL",
    featured: false,
    inStock: true,
    image: "",
    imageHover: "",
    images: [] as string[],
    imagePublicId: "",
    imagesPublicIds: [] as string[],
  });
  const [customColorName, setCustomColorName] = useState("");
  const [customColorHex, setCustomColorHex] = useState("#1a1a1a");
  const [manualImageUrl, setManualImageUrl] = useState("");

  // Orders State
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({
    orderStatus: "order_placed",
    courier: "DHL Express",
    trackingNumber: "",
    trackingUrl: "",
    note: "",
  });

  // Reviews State
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewStatusFilter, setReviewStatusFilter] = useState("all");

  // Blogs State
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("all");

  // Blog Modals & Forms
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<AdminBlog | null>(null);
  const [blogToDelete, setBlogToDelete] = useState<{ id: string; title: string } | null>(null);
  const [deletingBlog, setDeletingBlog] = useState(false);
  const [blogPreviewMode, setBlogPreviewMode] = useState(false);
  const [uploadingBlogCover, setUploadingBlogCover] = useState(false);

  const [blogForm, setBlogForm] = useState({
    title: "",
    subtitle: "",
    slug: "",
    category: "Heritage & History",
    excerpt: "",
    content: "",
    coverImage: "",
    tags: "leather, craftsmanship, vintage, outerwear",
    readingTime: "5 min read",
    authorName: "Leather Haven Craft Atelier",
    authorRole: "Master Leather Artisan",
    featured: false,
    isPublished: true,
    metaTitle: "",
    metaDescription: "",
  });

  // Media Upload State
  const [uploadingMedia, setUploadingMedia] = useState(false);
  const [uploadedAssets, setUploadedAssets] = useState<
    Array<{ url: string; publicId: string; format: string; width: number; height: number }>
  >([]);

  // Toast Notification
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const loadProducts = useCallback(async () => {
    setLoadingProducts(true);
    try {
      const res = await adminFetch("/api/products?limit=100");
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch {
      showToast("Could not load products catalog", "error");
    } finally {
      setLoadingProducts(false);
    }
  }, [showToast]);

  const loadSubscribers = useCallback(async () => {
    setLoadingSubscribers(true);
    try {
      const res = await adminFetch("/api/newsletter/subscribers");
      const data = await res.json();
      if (data.success) {
        setSubscribers(data.data);
      }
    } catch {
      showToast("Could not load newsletter subscribers", "error");
    } finally {
      setLoadingSubscribers(false);
    }
  }, [showToast]);

  const loadOrders = useCallback(async () => {
    setLoadingOrders(true);
    try {
      const res = await adminFetch("/api/orders/admin");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setOrders(data.data);
      }
    } catch {
      showToast("Could not load orders", "error");
    } finally {
      setLoadingOrders(false);
    }
  }, [showToast]);

  const loadReviews = useCallback(async () => {
    setLoadingReviews(true);
    try {
      const res = await adminFetch("/api/reviews/admin");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setReviews(data.data);
      }
    } catch {
      showToast("Could not load client reviews", "error");
    } finally {
      setLoadingReviews(false);
    }
  }, [showToast]);

  const loadBlogs = useCallback(async () => {
    setLoadingBlogs(true);
    try {
      const res = await adminFetch("/api/blogs");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setBlogs(data.data);
      }
    } catch {
      showToast("Could not load journal articles", "error");
    } finally {
      setLoadingBlogs(false);
    }
  }, [showToast]);

  // Auth Guard
  useEffect(() => {
    const token = getAdminToken();
    const storedUser = getAdminUser();
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    setUser(storedUser);
    loadProducts();
    loadSubscribers();
    loadBlogs();
    loadReviews();
    loadOrders();
  }, [router, loadProducts, loadSubscribers, loadBlogs, loadReviews, loadOrders]);

  function handleLogout() {
    clearAdminSession();
    router.replace("/admin/login");
  }

  function openEditOrder(ord: AdminOrder) {
    setSelectedOrder(ord);
    setOrderForm({
      orderStatus: ord.orderStatus || "order_placed",
      courier: ord.courier || "DHL Express",
      trackingNumber: ord.trackingNumber || "",
      trackingUrl: ord.trackingUrl || "",
      note: "",
    });
    setShowOrderModal(true);
  }

  async function handleOrderFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedOrder) return;
    try {
      const res = await adminFetch(`/api/orders/admin/${selectedOrder._id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderForm),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to update order");
      showToast("Order status & tracking updated");
      setShowOrderModal(false);
      setOrders((prev) => prev.map((o) => (o._id === selectedOrder._id ? data.data : o)));
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Failed to update order", "error");
    }
  }

  async function handleReviewStatus(id: string, status: "approved" | "rejected") {
    try {
      const res = await adminFetch(`/api/reviews/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      showToast(`Review marked as ${status}`);
      setReviews((prev) => prev.map((r) => (r._id === id ? { ...r, status } : r)));
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Failed to update review", "error");
    }
  }

  async function handleDeleteReview(id: string) {
    if (!confirm("Are you sure you want to permanently delete this review?")) return;
    try {
      const res = await adminFetch(`/api/reviews/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      showToast("Review deleted");
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Failed to delete review", "error");
    }
  }

  // Product CRUD
  function openCreateModal() {
    setEditingProduct(null);
    setProductForm({
      name: "",
      category: "schott-nyc",
      price: 650,
      discountPercent: 0,
      description: "Handcrafted top-grade leather with authentic hardware.",
      meta: "Full-grain, satin lining",
      color: "#1a1a1a",
      colorName: "Black",
      colors: [{ name: "Black", hex: "#1a1a1a" }],
      sizes: "S, M, L, XL",
      featured: false,
      inStock: true,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      imageHover: "",
      images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5"],
      imagePublicId: "",
      imagesPublicIds: [],
    });
    setCustomColorName("");
    setCustomColorHex("#1a1a1a");
    setManualImageUrl("");
    setShowProductModal(true);
  }

  function openEditModal(prod: Product) {
    setEditingProduct(prod);
    const initialImages =
      Array.isArray(prod.images) && prod.images.length > 0
        ? [...prod.images]
        : ([prod.image, prod.imageHover].filter(Boolean) as string[]);

    const initialColors = Array.isArray(prod.colors) && prod.colors.length > 0
      ? [...prod.colors]
      : (prod.colorName ? [{ name: prod.colorName, hex: prod.color || "#1a1a1a" }] : [{ name: "Black", hex: "#1a1a1a" }]);

    setProductForm({
      name: prod.name,
      category: prod.category,
      price: prod.price,
      discountPercent: prod.discountPercent || 0,
      description: prod.description,
      meta: prod.meta || "",
      color: prod.color || initialColors[0]?.hex || "#1a1a1a",
      colorName: prod.colorName || initialColors[0]?.name || "Black",
      colors: initialColors,
      sizes: (prod.sizes || []).join(", "),
      featured: prod.featured,
      inStock: prod.inStock,
      image: initialImages[0] || prod.image || "",
      imageHover: initialImages[1] || prod.imageHover || "",
      images: initialImages,
      imagePublicId: prod.imagePublicId || "",
      imagesPublicIds: prod.imagesPublicIds || [],
    });
    setCustomColorName("");
    setCustomColorHex("#1a1a1a");
    setManualImageUrl("");
    setShowProductModal(true);
  }

  async function handleProductFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const finalImages =
        productForm.images.length > 0
          ? productForm.images
          : [productForm.image].filter(Boolean);

      if (finalImages.length === 0) {
        showToast("Please upload or provide at least one product photo", "error");
        return;
      }

      const parsedSizes = productForm.sizes
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const finalColors = productForm.colors.length > 0
        ? productForm.colors
        : [{ name: productForm.colorName || "Black", hex: productForm.color || "#1a1a1a" }];

      const payload = {
        ...productForm,
        images: finalImages,
        image: finalImages[0] || "",
        imageHover: finalImages[1] || finalImages[0] || "",
        price: Number(productForm.price),
        discountPercent: Number(productForm.discountPercent || 0),
        colors: finalColors,
        colorName: finalColors[0]?.name || productForm.colorName || "Black",
        color: finalColors[0]?.hex || productForm.color || "#1a1a1a",
        sizes: parsedSizes.length > 0 ? parsedSizes : ["S", "M", "L", "XL"],
      };

      if (editingProduct) {
        // PUT update
        const res = await adminFetch(`/api/products/${editingProduct._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.message || "Failed to update product");
        showToast("Product updated successfully in catalog");
      } else {
        // POST create
        const res = await adminFetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.message || "Failed to create product");
        showToast("Product created successfully in catalog");
      }

      setShowProductModal(false);
      loadProducts();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Error saving product", "error");
    }
  }

  async function handleDeleteProduct(id: string, name: string) {
    if (!id) {
      showToast("Cannot determine product identifier", "error");
      return;
    }
    setProductToDelete({ id, name });
  }

  async function executeDeleteProduct(id: string, name: string) {
    if (!id) {
      showToast("Cannot determine product identifier to delete", "error");
      return;
    }

    setDeletingProduct(true);
    try {
      const res = await adminFetch(`/api/products/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Server returned ${res.status}: Delete failed`);
      }

      // Optimistically remove from state immediately
      setProducts((prev) =>
        prev.filter((p) => p._id !== id && p.id !== id && p.slug !== id)
      );

      setProductToDelete(null);
      if (editingProduct && (editingProduct._id === id || editingProduct.slug === id)) {
        setShowProductModal(false);
      }

      showToast(`Product "${name}" deleted successfully.`);
      loadProducts();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Error deleting product", "error");
    } finally {
      setDeletingProduct(false);
    }
  }

  const handleToggleSize = (sizeStr: string) => {
    const current = productForm.sizes
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    let updated: string[];
    if (current.includes(sizeStr)) {
      updated = current.filter((s) => s !== sizeStr);
    } else {
      const set = new Set([...current, sizeStr]);
      updated = ALL_AVAILABLE_SIZES.filter((s) => set.has(s));
      for (const s of current) {
        if (!updated.includes(s)) updated.push(s);
      }
    }
    setProductForm({ ...productForm, sizes: updated.join(", ") });
  };

  const handleSetPresetSizes = (preset: "standard" | "all" | "accessories" | "clear") => {
    if (preset === "all") {
      setProductForm({ ...productForm, sizes: "XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL" });
    } else if (preset === "standard") {
      setProductForm({ ...productForm, sizes: "S, M, L, XL" });
    } else if (preset === "accessories") {
      setProductForm({ ...productForm, sizes: "One Size" });
    } else if (preset === "clear") {
      setProductForm({ ...productForm, sizes: "" });
    }
  };

  const handleAddColor = (name: string, hex: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const current = productForm.colors || [];
    if (current.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      showToast(`Color "${trimmed}" is already added`, "error");
      return;
    }
    const updated = [...current, { name: trimmed, hex: hex || "#1a1a1a" }];
    setProductForm({
      ...productForm,
      colors: updated,
      colorName: updated[0]?.name || "Black",
      color: updated[0]?.hex || "#1a1a1a",
    });
    setCustomColorName("");
  };

  const handleRemoveColor = (indexToRemove: number) => {
    const updated = (productForm.colors || []).filter((_, idx) => idx !== indexToRemove);
    setProductForm({
      ...productForm,
      colors: updated,
      colorName: updated[0]?.name || "Black",
      color: updated[0]?.hex || "#1a1a1a",
    });
  };

  async function handleToggleStock(prod: Product) {
    try {
      const res = await adminFetch(`/api/products/${prod._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inStock: !prod.inStock }),
      });
      if (res.ok) {
        showToast(`Stock toggled for ${prod.name}`);
        loadProducts();
      }
    } catch {
      showToast("Failed to toggle stock", "error");
    }
  }

  // Multi-file Batch Upload via Backend
  async function handleBatchUpload(files: FileList | File[], target: "form" | "mediaTab" = "form") {
    if (!files || files.length === 0) return;
    setUploadingMedia(true);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const res = await adminFetch("/api/upload/batch", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Batch upload failed");

      const items: Array<{ url: string; publicId: string; format: string; width: number; height: number }> = data.data || [];
      const newUrls = items.map((it) => it.url);
      const newPublicIds = items.map((it) => it.publicId);

      if (target === "form") {
        setProductForm((prev) => {
          const updatedImages = [...prev.images, ...newUrls];
          return {
            ...prev,
            images: updatedImages,
            imagesPublicIds: [...prev.imagesPublicIds, ...newPublicIds],
            image: updatedImages[0] || prev.image,
            imageHover: updatedImages[1] || prev.imageHover || updatedImages[0] || "",
          };
        });
        showToast(`Uploaded and linked ${items.length} photo(s) to product!`);
      } else {
        setUploadedAssets((prev) => [...items, ...prev]);
        showToast(`Uploaded ${items.length} asset(s) to Media Studio!`);
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Upload error", "error");
    } finally {
      setUploadingMedia(false);
    }
  }

  function handleAddManualImageUrl() {
    const trimmed = manualImageUrl.trim();
    if (!trimmed) return;
    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://") && !trimmed.startsWith("/")) {
      showToast("Please enter a valid image URL starting with http://, https://, or /", "error");
      return;
    }
    setProductForm((prev) => {
      const updated = [...prev.images, trimmed];
      return {
        ...prev,
        images: updated,
        image: updated[0] || prev.image,
        imageHover: updated[1] || prev.imageHover || updated[0] || "",
      };
    });
    setManualImageUrl("");
    showToast("Image URL added to product gallery");
  }

  function handleRemoveImage(index: number) {
    setProductForm((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      const updatedPublicIds = prev.imagesPublicIds.filter((_, i) => i !== index);
      return {
        ...prev,
        images: updatedImages,
        imagesPublicIds: updatedPublicIds,
        image: updatedImages[0] || "",
        imageHover: updatedImages[1] || updatedImages[0] || "",
      };
    });
  }

  function handleMoveImage(index: number, direction: "up" | "down") {
    setProductForm((prev) => {
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.images.length) return prev;

      const newImages = [...prev.images];
      const [movedImg] = newImages.splice(index, 1);
      newImages.splice(targetIndex, 0, movedImg);

      const newPublicIds = [...prev.imagesPublicIds];
      if (newPublicIds.length === prev.images.length) {
        const [movedId] = newPublicIds.splice(index, 1);
        newPublicIds.splice(targetIndex, 0, movedId);
      }

      return {
        ...prev,
        images: newImages,
        imagesPublicIds: newPublicIds,
        image: newImages[0] || "",
        imageHover: newImages[1] || newImages[0] || "",
      };
    });
  }

  function handleSetDefaultImage(index: number) {
    if (index === 0) return;
    setProductForm((prev) => {
      const newImages = [...prev.images];
      const [chosen] = newImages.splice(index, 1);
      newImages.unshift(chosen);

      const newPublicIds = [...prev.imagesPublicIds];
      if (newPublicIds.length === prev.images.length) {
        const [chosenId] = newPublicIds.splice(index, 1);
        newPublicIds.unshift(chosenId);
      }

      return {
        ...prev,
        images: newImages,
        imagesPublicIds: newPublicIds,
        image: newImages[0] || "",
        imageHover: newImages[1] || newImages[0] || "",
      };
    });
  }

  // Blog CRUD Handlers
  function openCreateBlogModal() {
    setEditingBlog(null);
    setBlogPreviewMode(false);
    setBlogForm({
      title: "",
      subtitle: "",
      slug: "",
      category: "Heritage & History",
      excerpt: "",
      content: `## The Heritage of Craftsmanship\n\nEvery piece of vintage leather carries a history embedded in grain, tannage, and anatomical drape.\n\n### Construction Forensics\n\n- Full-grain steerhide cut to period patterns\n- Authentic heavy brass hardware\n- Reinforced double-needle structural stitching\n\n> "True craftsmanship is not about artificial perfection, but authentic character that matures with age."\n\n| Feature | Vintage Master Spec | Modern Mass-Market |\n| --- | --- | --- |\n| Tannage | Pure Vegetable & Chrome | Synthetic Bonded |\n| Stitching | Heavy Ticket 30 Bonded Nylon | Lightweight Polyester |`,
      coverImage: "/banners/home-desktop.jpg",
      tags: "leather, craftsmanship, vintage, outerwear",
      readingTime: "5 min read",
      authorName: "Leather Haven Craft Atelier",
      authorRole: "Master Leather Artisan",
      featured: false,
      isPublished: true,
      metaTitle: "",
      metaDescription: "",
    });
    setShowBlogModal(true);
  }

  function openEditBlogModal(blog: AdminBlog) {
    setEditingBlog(blog);
    setBlogPreviewMode(false);
    setBlogForm({
      title: blog.title,
      subtitle: blog.subtitle || "",
      slug: blog.slug,
      category: blog.category || "Heritage & History",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      coverImage: blog.coverImage || "",
      tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : "",
      readingTime: blog.readingTime || "5 min read",
      authorName: blog.author?.name || "Leather Haven Craft Atelier",
      authorRole: blog.author?.role || "Master Leather Artisan",
      featured: Boolean(blog.featured),
      isPublished: blog.isPublished !== undefined ? Boolean(blog.isPublished) : true,
      metaTitle: blog.metaTitle || blog.title,
      metaDescription: blog.metaDescription || blog.excerpt || "",
    });
    setShowBlogModal(true);
  }

  function handleBlogTitleChange(title: string) {
    setBlogForm((prev) => ({
      ...prev,
      title,
      slug: !editingBlog
        ? title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
        : prev.slug,
      metaTitle: !editingBlog && !prev.metaTitle ? title : prev.metaTitle,
    }));
  }

  async function handleBlogCoverUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    const file = files[0];
    setUploadingBlogCover(true);
    try {
      const formData = new FormData();
      formData.append("images", file);
      formData.append("folder", "blogs");

      const res = await adminFetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.success || !data.data?.[0]?.url) {
        throw new Error(data.message || "Failed to upload cover image");
      }
      const uploadedUrl = data.data[0].url;
      setBlogForm((prev) => ({ ...prev, coverImage: uploadedUrl }));
      showToast("Cover image uploaded to Cloudinary!");
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Cover upload failed", "error");
    } finally {
      setUploadingBlogCover(false);
    }
  }

  async function handleBlogFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!blogForm.title.trim()) {
      showToast("Blog title is required", "error");
      return;
    }
    if (!blogForm.content.trim()) {
      showToast("Blog content is required", "error");
      return;
    }

    const payload = {
      title: blogForm.title.trim(),
      subtitle: blogForm.subtitle.trim(),
      slug: blogForm.slug.trim() || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      category: blogForm.category.trim(),
      excerpt: blogForm.excerpt.trim() || blogForm.title.trim(),
      content: blogForm.content,
      coverImage: blogForm.coverImage.trim() || "/banners/home-desktop.jpg",
      tags: blogForm.tags.split(",").map((t) => t.trim()).filter(Boolean),
      readingTime: blogForm.readingTime.trim() || "5 min read",
      author: {
        name: blogForm.authorName.trim() || "Leather Haven Craft Atelier",
        role: blogForm.authorRole.trim() || "Master Leather Artisan",
      },
      featured: blogForm.featured,
      isPublished: blogForm.isPublished,
      metaTitle: blogForm.metaTitle.trim() || blogForm.title.trim(),
      metaDescription: blogForm.metaDescription.trim() || blogForm.excerpt.trim() || blogForm.title.trim(),
    };

    try {
      const isEdit = Boolean(editingBlog);
      const endpoint = isEdit ? `/api/blogs/${editingBlog!._id || editingBlog!.slug}` : "/api/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await adminFetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to save blog post");
      }

      showToast(isEdit ? "Article updated successfully!" : "New article published!");
      setShowBlogModal(false);
      loadBlogs();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Error saving article", "error");
    }
  }

  async function executeDeleteBlog(id: string, title: string) {
    setDeletingBlog(true);
    try {
      const res = await adminFetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete article");
      }
      showToast(`Article "${title}" deleted successfully`);
      setBlogToDelete(null);
      if (editingBlog && (editingBlog._id === id || editingBlog.slug === id)) {
        setShowBlogModal(false);
      }
      loadBlogs();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Error deleting article", "error");
    } finally {
      setDeletingBlog(false);
    }
  }

  // Export Subscribers CSV
  function exportSubscribersCSV() {
    if (subscribers.length === 0) {
      showToast("No subscribers to export", "error");
      return;
    }
    const headers = ["Email,Status,Source,Date Joined"];
    const rows = subscribers.map(
      (s) => `"${s.email}","${s.status}","${s.source}","${new Date(s.createdAt).toISOString()}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `lhc_subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Subscribers exported to CSV");
  }

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(catalogSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(catalogSearch.toLowerCase());
      const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, catalogSearch, categoryFilter]);

  // Filtered Subscribers
  const filteredSubscribers = useMemo(() => {
    return subscribers.filter((s) => s.email.toLowerCase().includes(subscriberSearch.toLowerCase()));
  }, [subscribers, subscriberSearch]);

  // Filtered Blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const q = blogSearch.toLowerCase();
      const matchesSearch =
        b.title.toLowerCase().includes(q) ||
        (b.subtitle && b.subtitle.toLowerCase().includes(q)) ||
        (b.category && b.category.toLowerCase().includes(q)) ||
        (Array.isArray(b.tags) && b.tags.some((t) => t.toLowerCase().includes(q)));
      const matchesCategory = blogCategoryFilter === "all" || b.category === blogCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, blogSearch, blogCategoryFilter]);

  // Catalog Valuation & Metrics
  const totalValuation = useMemo(() => {
    return products.reduce((acc, p) => acc + (p.price || 0), 0);
  }, [products]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const c of BRAND_CATEGORIES) map[c.id] = 0;
    for (const p of products) {
      if (map[p.category] !== undefined) map[p.category]++;
    }
    return map;
  }, [products]);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1e1915]">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 text-xs shadow-xl backdrop-blur-md transition-all ${
            toast.type === "success"
              ? "border-emerald-300 bg-emerald-50/95 text-emerald-900"
              : "border-rose-300 bg-rose-50/95 text-rose-900"
          }`}
        >
          <span className="font-bold">{toast.type === "success" ? "✓" : "✕"}</span>
          <span className="font-medium tracking-wide">{toast.message}</span>
        </div>
      )}

      {/* Top Executive App Bar */}
      <header className="sticky top-0 z-40 border-b border-[#e7e0d6] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3.5">
            <Link href="/" className="inline-flex items-center transition-transform hover:scale-[1.02]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Leather Haven Craft"
                className="h-10 w-auto max-w-[170px] object-contain"
              />
            </Link>
            <div className="hidden sm:block border-l border-[#e7e0d6] pl-3">
              <div className="flex items-center gap-2">
                <span className="rounded border border-[#e5dcd0] bg-[#f4eee6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a4d2b]">
                  Executive Suite
                </span>
              </div>
              <p className="text-[11px] text-[#786c5f]">
                Catalog &amp; Audience Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Clean System Status */}
            <div className="hidden items-center gap-2 rounded-full border border-[#e7e0d6] bg-[#faf8f5] px-3 py-1 text-[11px] text-[#6b6053] md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="font-medium">All Systems Operational</span>
            </div>

            {/* View Storefront */}
            <Link
              href="/"
              target="_blank"
              className="hidden rounded-lg border border-[#ded6ca] bg-[#faf8f5] px-3 py-1.5 text-xs font-medium text-[#5c5246] transition-colors hover:border-[#8a4d2b] hover:text-[#1e1915] sm:inline-block"
            >
              View Storefront ↗
            </Link>

            {/* Stakeholder Info & Logout */}
            <div className="flex items-center gap-3 border-l border-[#e7e0d6] pl-3">
              <div className="text-right">
                <div className="text-xs font-semibold text-[#1e1915]">
                  {user?.name || "Stakeholder"}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#786c5f]">
                  {user?.role || "superadmin"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700 transition-colors hover:bg-rose-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto flex max-w-7xl gap-8 px-6 text-xs">
          {[
            { id: "overview", label: "Overview & Analytics" },
            { id: "orders", label: `Orders (${orders.length})` },
            { id: "catalog", label: `Catalog (${products.length})` },
            { id: "blogs", label: `Journal / Blogs (${blogs.length})` },
            { id: "reviews", label: `Reviews (${reviews.length})` },
            { id: "subscribers", label: `Audience (${subscribers.length})` },
            { id: "media", label: "Media Studio" },
            { id: "system", label: "System Status" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`border-b-2 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-[#8a4d2b] text-[#1e1915] font-semibold"
                  : "border-transparent text-[#786c5f] hover:text-[#1e1915]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* ================= TAB 1: OVERVIEW & ANALYTICS ================= */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Top 4 KPI Metrics */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              <div className="rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7a6f62]">
                  <span>Total Catalog Pieces</span>
                  <span className="text-[#8a4d2b]">Live</span>
                </div>
                <div className="mt-2 font-serif text-3xl font-bold text-[#1e1915]">
                  {products.length}
                </div>
                <div className="mt-2 text-[11px] text-[#827668]">
                  {products.filter((p) => p.inStock).length} in stock · {products.filter((p) => p.featured).length} featured
                </div>
              </div>

              <div className="rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7a6f62]">
                  <span>Estimated Catalog Valuation</span>
                  <span className="text-[#8a4d2b]">USD</span>
                </div>
                <div className="mt-2 font-serif text-3xl font-bold text-[#1e1915]">
                  ${totalValuation.toLocaleString()}
                </div>
                <div className="mt-2 text-[11px] text-[#827668]">
                  Across {products.length} registered styles
                </div>
              </div>

              <div className="rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7a6f62]">
                  <span>Newsletter Subscribers</span>
                  <span className="text-[#8a4d2b]">Audience</span>
                </div>
                <div className="mt-2 font-serif text-3xl font-bold text-[#1e1915]">
                  {subscribers.length}
                </div>
                <div className="mt-2 text-[11px] font-medium text-emerald-700">
                  {subscribers.filter((s) => s.status === "active").length} active collectors
                </div>
              </div>

              <div className="rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7a6f62]">
                  <span>Journal &amp; Blogs</span>
                  <span className="text-[#8a4d2b]">Editorial</span>
                </div>
                <div className="mt-2 font-serif text-3xl font-bold text-[#1e1915]">
                  {blogs.length}
                </div>
                <div className="mt-2 text-[11px] text-[#827668]">
                  {blogs.filter((b) => b.isPublished).length} published · {blogs.filter((b) => b.featured).length} featured
                </div>
              </div>

              <div className="rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#7a6f62]">
                  <span>Active Inventory</span>
                  <span className="font-medium text-emerald-700">Ready to Ship</span>
                </div>
                <div className="mt-2 font-serif text-3xl font-bold text-[#1e1915]">
                  {products.filter((p) => p.inStock).length} Available
                </div>
                <div className="mt-2 text-[11px] text-[#827668]">
                  {products.filter((p) => p.featured).length} runway featured pieces
                </div>
              </div>
            </div>

            {/* Brand Category Breakdown Grid */}
            <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold tracking-wide text-[#1e1915]">
                Catalog Distribution Across Brand Collections
              </h3>
              <p className="mt-1 text-xs text-[#706456]">
                Catalog grouped across 7 signature brand collections and silhouettes.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {BRAND_CATEGORIES.map((cat) => {
                  const count = categoryCounts[cat.id] || 0;
                  const pct = products.length ? Math.round((count / products.length) * 100) : 0;
                  return (
                    <div
                      key={cat.id}
                      className="rounded-lg border border-[#ebe5dc] bg-[#faf8f5] p-4 transition-all hover:border-[#bfa27a] hover:bg-white"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#241e1a]">{cat.name}</span>
                        <span className="rounded bg-[#ede5d8] px-2 py-0.5 text-[11px] font-bold text-[#8a4d2b]">
                          {count}
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#e8e1d6]">
                        <div
                          className="h-full bg-gradient-to-r from-[#8a4d2b] to-[#d4af37]"
                          style={{ width: `${Math.max(5, pct)}%` }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-[#786c5f]">
                        <span>{pct}% of catalog</span>
                        <button
                          onClick={() => {
                            setCategoryFilter(cat.id);
                            setActiveTab("catalog");
                          }}
                          className="font-medium text-[#8a4d2b] hover:underline"
                        >
                          View Items →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Quick Actions Panel */}
              <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold tracking-wide text-[#1e1915]">Executive Shortcuts</h4>
                <div className="mt-4 space-y-3">
                  <button
                    onClick={openCreateModal}
                    className="flex w-full items-center justify-between rounded-lg border border-[#ded6ca] bg-[#faf8f5] px-4 py-3 text-xs font-medium text-[#241e1a] transition-colors hover:border-[#8a4d2b] hover:bg-white"
                  >
                    <span>+ Add New Product to Catalog</span>
                    <span className="font-bold text-[#8a4d2b]">→</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("media")}
                    className="flex w-full items-center justify-between rounded-lg border border-[#ded6ca] bg-[#faf8f5] px-4 py-3 text-xs font-medium text-[#241e1a] transition-colors hover:border-[#8a4d2b] hover:bg-white"
                  >
                    <span>☁ Upload Jacket Assets to Media Studio</span>
                    <span className="font-bold text-[#8a4d2b]">→</span>
                  </button>
                  <button
                    onClick={exportSubscribersCSV}
                    className="flex w-full items-center justify-between rounded-lg border border-[#ded6ca] bg-[#faf8f5] px-4 py-3 text-xs font-medium text-[#241e1a] transition-colors hover:border-[#8a4d2b] hover:bg-white"
                  >
                    <span>📥 Export Newsletter Subscribers (CSV)</span>
                    <span className="font-bold text-[#8a4d2b]">→</span>
                  </button>
                </div>
              </div>

              {/* Recent Subscribers */}
              <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm lg:col-span-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold tracking-wide text-[#1e1915]">
                    Recent Newsletter Signups
                  </h4>
                  <button
                    onClick={() => setActiveTab("subscribers")}
                    className="text-xs font-medium text-[#8a4d2b] hover:underline"
                  >
                    View all ({subscribers.length}) →
                  </button>
                </div>
                <div className="mt-4 divide-y divide-[#ede7df]">
                  {subscribers.slice(0, 5).map((sub) => (
                    <div key={sub._id} className="flex items-center justify-between py-2.5 text-xs">
                      <div>
                        <div className="font-medium text-[#1e1915]">{sub.email}</div>
                        <div className="text-[10px] text-[#827668]">
                          Joined {new Date(sub.createdAt).toLocaleDateString()} · source: {sub.source}
                        </div>
                      </div>
                      <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                        {sub.status}
                      </span>
                    </div>
                  ))}
                  {subscribers.length === 0 && (
                    <p className="py-6 text-center text-xs text-[#827668]">No subscribers recorded yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: CATALOG MANAGEMENT ================= */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-xl border border-[#e8e2d8] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6b6052]">Stage:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "all", label: `All (${orders.length})` },
                    { id: "order_placed", label: `Placed (${orders.filter((o) => o.orderStatus === "order_placed").length})` },
                    { id: "leather_selected", label: `Hide (${orders.filter((o) => o.orderStatus === "leather_selected").length})` },
                    { id: "crafting_in_progress", label: `Crafting (${orders.filter((o) => o.orderStatus === "crafting_in_progress").length})` },
                    { id: "quality_inspection", label: `Inspection (${orders.filter((o) => o.orderStatus === "quality_inspection").length})` },
                    { id: "dispatched", label: `Dispatched (${orders.filter((o) => o.orderStatus === "dispatched").length})` },
                    { id: "delivered", label: `Delivered (${orders.filter((o) => o.orderStatus === "delivered").length})` },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setOrderStatusFilter(filter.id)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        orderStatusFilter === filter.id
                          ? "bg-[#2a1810] text-white shadow-xs"
                          : "bg-[#faf8f5] text-[#6b5c51] hover:bg-[#f2ece4]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#e8e2d8] bg-[#f4efe8] text-[11px] uppercase tracking-wider text-[#5e5346]">
                  <tr>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Pieces Ordered</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Workshop Stage</th>
                    <th className="px-4 py-3">Air Courier &amp; Tracking</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede7df]">
                  {loadingOrders ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-xs text-[#827668]">
                        Loading orders...
                      </td>
                    </tr>
                  ) : orders.filter((o) => orderStatusFilter === "all" || o.orderStatus === orderStatusFilter).length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-xs text-[#827668]">
                        No orders found for this stage.
                      </td>
                    </tr>
                  ) : (
                    orders
                      .filter((o) => orderStatusFilter === "all" || o.orderStatus === orderStatusFilter)
                      .map((ord) => (
                        <tr key={ord._id} className="transition-colors hover:bg-[#faf7f2]">
                          <td className="px-4 py-3 align-top font-bold text-[#1e1915]">
                            <div className="font-mono text-xs">{ord.orderNumber}</div>
                            <div className="text-[10px] text-[#85796b] font-normal">
                              {new Date(ord.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <div className="font-semibold text-[#1e1915]">{ord.clientName}</div>
                            <div className="text-[11px] text-[#706456]">{ord.clientEmail}</div>
                            {ord.shippingAddress?.country && (
                              <div className="text-[10px] text-[#8a4d2b] font-medium">{ord.shippingAddress.country}</div>
                            )}
                          </td>
                          <td className="px-4 py-3 align-top max-w-xs">
                            <div className="space-y-1">
                              {ord.items.map((it, i) => (
                                <div key={i} className="text-[11px] text-[#52443a]">
                                  <span className="font-semibold">{it.quantity}x</span> {it.name} ({it.size})
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top font-bold text-[#1e1915]">
                            ${ord.totalAmount.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <span
                              className={`rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                                ord.orderStatus === "delivered"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                  : ord.orderStatus === "dispatched" || ord.orderStatus === "in_transit"
                                  ? "bg-blue-50 text-blue-800 border border-blue-300"
                                  : ord.orderStatus === "crafting_in_progress" || ord.orderStatus === "quality_inspection"
                                  ? "bg-amber-50 text-amber-800 border border-amber-300"
                                  : "bg-stone-100 text-stone-800 border border-stone-300"
                              }`}
                            >
                              {ord.orderStatus.replace(/_/g, " ")}
                            </span>
                          </td>
                          <td className="px-4 py-3 align-top">
                            {ord.courier ? (
                              <div className="space-y-0.5">
                                <div className="font-semibold text-[#1e1915]">{ord.courier}</div>
                                {ord.trackingNumber && (
                                  <div className="font-mono text-[11px] text-[#706456]">{ord.trackingNumber}</div>
                                )}
                                {ord.trackingUrl && (
                                  <a
                                    href={ord.trackingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold text-[#8a4d2b] hover:underline block"
                                  >
                                    Live Link ↗
                                  </a>
                                )}
                              </div>
                            ) : (
                              <span className="text-[11px] text-[#9a8e80] italic">Not dispatched yet</span>
                            )}
                          </td>
                          <td className="px-4 py-3 align-top text-right">
                            <button
                              type="button"
                              onClick={() => openEditOrder(ord)}
                              className="rounded-lg bg-[#2a1810] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] shadow-xs cursor-pointer"
                            >
                              Update Status
                            </button>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "catalog" && (
          <div className="space-y-6">
            {/* Filter & Action Toolbar */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e8e2d8] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Search styles by name or category..."
                  value={catalogSearch}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  className="h-10 w-full rounded-lg border border-[#d8d0c4] bg-[#faf8f5] px-3 text-xs text-[#1e1915] placeholder-[#9a8e80] focus:border-[#8a4d2b] focus:bg-white focus:outline-none sm:w-72"
                />

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="h-10 rounded-lg border border-[#d8d0c4] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                >
                  <option value="all">All Brands (7 Houses)</option>
                  {BRAND_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={openCreateModal}
                className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-4 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:brightness-105 active:scale-[0.99]"
              >
                <span>+ Add Product</span>
              </button>
            </div>

            {/* Catalog Table */}
            <div className="overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#e8e2d8] bg-[#f4efe8] text-[11px] uppercase tracking-wider text-[#5e5346]">
                    <tr>
                      <th className="px-4 py-3">Product</th>
                      <th className="px-4 py-3">Brand / House</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3">Sizes</th>
                      <th className="px-4 py-3">Inventory Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ede7df]">
                    {loadingProducts ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-xs text-[#827668]">
                          Loading catalog items...
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map((prod) => (
                        <tr key={prod._id} className="transition-colors hover:bg-[#faf7f2]">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              {prod.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={prod.image}
                                  alt={prod.name}
                                  className="h-12 w-12 rounded object-cover border border-[#e0d7cb]"
                                />
                              ) : (
                                <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ede7df] text-xs text-[#827668]">
                                  No img
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-[#1e1915]">{prod.name}</div>
                                <div className="text-[11px] text-[#85796b]">/{prod.slug}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="rounded border border-[#e2d7c8] bg-[#f4eee6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#8a4d2b]">
                              {prod.category}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-[#1e1915]">
                            {prod.discountPercent && prod.discountPercent > 0 ? (
                              <div className="flex flex-col">
                                <span className="font-bold text-[#8a4d2b]">
                                  ${Math.round(prod.price * (1 - prod.discountPercent / 100)).toLocaleString()}
                                </span>
                                <div className="flex items-center gap-1.5 text-[11px]">
                                  <span className="text-[#85796b] line-through">
                                    ${prod.price.toLocaleString()}
                                  </span>
                                  <span className="rounded bg-[#9e2a2b]/10 px-1 py-0.2 text-[10px] font-bold text-[#9e2a2b]">
                                    -{prod.discountPercent}%
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <span>${prod.price.toLocaleString()}</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-[#706456]">
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-semibold text-[#1e1915]">
                                {(prod.sizes || []).join(", ") || "—"}
                              </span>
                              {prod.colors && prod.colors.length > 0 ? (
                                <div className="flex flex-wrap items-center gap-1">
                                  {prod.colors.slice(0, 3).map((c, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 text-[10px] text-[#8a7a6c]">
                                      <span
                                        className="h-2 w-2 rounded-full border border-black/20 shrink-0"
                                        style={{ backgroundColor: c.hex || "#1a1a1a" }}
                                      />
                                      {c.name}
                                    </span>
                                  ))}
                                  {prod.colors.length > 3 && (
                                    <span className="text-[9px] text-[#8a7a6c]">+{prod.colors.length - 3}</span>
                                  )}
                                </div>
                              ) : (
                                <span className="text-[10px] text-[#8a7a6c]">{prod.colorName || "—"}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleToggleStock(prod)}
                                className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${
                                  prod.inStock
                                    ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                    : "bg-rose-50 text-rose-800 border border-rose-300"
                                }`}
                              >
                                {prod.inStock ? "In Stock" : "Sold Out"}
                              </button>
                              {prod.featured && (
                                <span className="rounded bg-amber-50 border border-amber-200 px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-amber-800">
                                  Featured
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => openEditModal(prod)}
                                className="rounded border border-[#dcd4c8] bg-white px-2.5 py-1 text-[11px] font-medium text-[#8a4d2b] transition-colors hover:bg-[#faf6f0]"
                              >
                                Edit
                              </button>
                              <button
                                type="button" onClick={() => handleDeleteProduct(prod._id || prod.id || prod.slug, prod.name)}
                                className="rounded border border-rose-200 bg-white px-2.5 py-1 text-[11px] font-medium text-rose-600 transition-colors hover:bg-rose-50"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                    {filteredProducts.length === 0 && !loadingProducts && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-xs text-[#827668]">
                          No products match the selected criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

                {/* ================= TAB: BLOGS & JOURNAL ================= */}
        {activeTab === "blogs" && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-[#e8e2d8] bg-white p-5 shadow-sm">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#1e1915]">
                  The Journal &amp; Editorial Management
                </h2>
                <p className="text-xs text-[#786c5f]">
                  Publish handcrafted guides, brand forensics, and tannage analyses to /blog
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={openCreateBlogModal}
                  className="rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:brightness-105 active:scale-[0.99] cursor-pointer flex items-center gap-1.5"
                >
                  <span>✍️</span>
                  <span>Write New Article</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-[#e8e2d8] bg-white p-4 shadow-sm">
              <div className="relative w-full sm:max-w-md">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#9c9183]">🔍</span>
                <input
                  type="text"
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  placeholder="Search articles by title, category, or tag..."
                  className="h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] pl-10 pr-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:outline-none"
                />
              </div>

              <div className="w-full sm:w-auto">
                <select
                  value={blogCategoryFilter}
                  onChange={(e) => setBlogCategoryFilter(e.target.value)}
                  className="h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  {Array.from(new Set(blogs.map((b) => b.category).filter(Boolean))).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-xs text-[#786c5f] ml-auto">
                Showing <strong className="text-[#1e1915]">{filteredBlogs.length}</strong> of {blogs.length} articles
              </div>
            </div>

            {/* Articles Table */}
            <div className="overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-sm">
              {loadingBlogs ? (
                <div className="py-16 text-center text-xs text-[#786c5f]">
                  <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#8a4d2b] border-t-transparent mb-3" />
                  <p>Loading journal articles...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#786c5f]">
                  <p className="font-serif text-base font-bold text-[#1e1915] mb-1">No articles found</p>
                  <p>No posts match your current search or category filter.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-[#eee7de] bg-[#fbf9f6] text-[11px] font-semibold uppercase tracking-wider text-[#786c5f]">
                      <tr>
                        <th className="px-5 py-3.5">Article</th>
                        <th className="px-4 py-3.5">Category</th>
                        <th className="px-4 py-3.5">Status</th>
                        <th className="px-4 py-3.5">Read Time</th>
                        <th className="px-4 py-3.5">Published Date</th>
                        <th className="px-5 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eee7de]">
                      {filteredBlogs.map((b) => (
                        <tr key={b._id || b.slug} className="hover:bg-[#faf7f2]/60 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-[#e8e2d8] bg-[#1f1a16]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={b.coverImage || "/banners/home-desktop.jpg"}
                                  alt={b.title}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="min-w-0 max-w-md">
                                <p className="font-semibold text-[#1e1915] truncate">{b.title}</p>
                                <p className="text-[11px] text-[#786c5f] truncate font-mono">/blog/{b.slug}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="inline-block rounded-full bg-[#f4eee6] border border-[#e5dcd0] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                              {b.category}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  b.isPublished ? "bg-emerald-500" : "bg-gray-400"
                                }`}
                              />
                              <span
                                className={`text-[11px] font-semibold ${
                                  b.isPublished ? "text-emerald-700" : "text-gray-500"
                                }`}
                              >
                                {b.isPublished ? "Published" : "Draft"}
                              </span>
                              {b.featured && (
                                <span className="rounded bg-amber-100 border border-amber-300 px-1.5 py-0.2 text-[9px] font-bold text-amber-800 uppercase">
                                  Featured
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-[#786c5f] whitespace-nowrap">
                            {b.readingTime || "5 min read"}
                          </td>
                          <td className="px-4 py-4 text-[#786c5f] whitespace-nowrap">
                            {b.createdAt ? new Date(b.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            }) : "—"}
                          </td>
                          <td className="px-5 py-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                href={`/blog/${b.slug}`}
                                target="_blank"
                                className="rounded-md border border-[#ded6ca] bg-white px-2.5 py-1 text-[11px] font-medium text-[#5c5246] hover:border-[#8a4d2b] hover:text-[#1e1915]"
                              >
                                View ↗
                              </Link>
                              <button
                                type="button"
                                onClick={() => openEditBlogModal(b)}
                                className="rounded-md border border-[#ded6ca] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#8a4d2b] hover:bg-[#faf7f2] cursor-pointer"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => setBlogToDelete({ id: b._id || b.slug, title: b.title })}
                                className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-semibold text-rose-600 hover:bg-rose-100 cursor-pointer"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 3: AUDIENCE & SUBSCRIBERS ================= */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-xl border border-[#e8e2d8] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6b6052]">Status:</span>
                <div className="flex gap-1.5">
                  {[
                    { id: "all", label: `All (${reviews.length})` },
                    { id: "approved", label: `Approved (${reviews.filter((r) => r.status === "approved").length})` },
                    { id: "pending", label: `Pending (${reviews.filter((r) => r.status === "pending").length})` },
                    { id: "rejected", label: `Rejected (${reviews.filter((r) => r.status === "rejected").length})` },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setReviewStatusFilter(filter.id)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                        reviewStatusFilter === filter.id
                          ? "bg-[#2a1810] text-white shadow-xs"
                          : "bg-[#faf8f5] text-[#6b5c51] hover:bg-[#f2ece4]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-[#706456]">
                Average Rating: <strong className="text-[#2a1810] font-bold">
                  {reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : "5.0"} / 5.0
                </strong>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#e8e2d8] bg-[#f4efe8] text-[11px] uppercase tracking-wider text-[#5e5346]">
                  <tr>
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Rating</th>
                    <th className="px-4 py-3">Review &amp; Piece</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Moderation Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede7df]">
                  {loadingReviews ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs text-[#827668]">
                        Loading client reviews...
                      </td>
                    </tr>
                  ) : reviews.filter((r) => reviewStatusFilter === "all" || r.status === reviewStatusFilter).length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs text-[#827668]">
                        No reviews found for selected filter.
                      </td>
                    </tr>
                  ) : (
                    reviews
                      .filter((r) => reviewStatusFilter === "all" || r.status === reviewStatusFilter)
                      .map((rev) => (
                        <tr key={rev._id} className="transition-colors hover:bg-[#faf7f2]">
                          <td className="px-4 py-3 align-top font-medium text-[#1e1915]">
                            <div className="font-semibold">{rev.clientName}</div>
                            {rev.clientLocation && (
                              <div className="text-[11px] text-[#85796b]">{rev.clientLocation}</div>
                            )}
                            <div className="text-[10px] text-[#a09485] mt-1">
                              {new Date(rev.createdAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <span className="text-[#8a4d2b] font-bold text-sm">
                              {"★".repeat(Math.min(5, Math.max(1, rev.rating)))}
                            </span>
                            <span className="ml-1 text-[11px] text-[#706456]">({rev.rating}/5)</span>
                          </td>
                          <td className="px-4 py-3 align-top max-w-md">
                            <div className="font-bold text-[#1e1915]">&ldquo;{rev.title}&rdquo;</div>
                            <div className="text-[#52443a] text-xs mt-1 leading-relaxed line-clamp-3">
                              {rev.content}
                            </div>
                            {rev.piecePurchased && (
                              <div className="mt-1 text-[10px] font-medium text-[#8a4d2b]">
                                Piece: {rev.piecePurchased}
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <span
                              className={`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                                rev.status === "approved"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                  : rev.status === "pending"
                                  ? "bg-amber-50 text-amber-800 border border-amber-300"
                                  : "bg-rose-50 text-rose-800 border border-rose-300"
                              }`}
                            >
                              {rev.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 align-top text-right space-x-1 whitespace-nowrap">
                            {rev.status !== "approved" && (
                              <button
                                type="button"
                                onClick={() => handleReviewStatus(rev._id, "approved")}
                                className="rounded bg-emerald-700 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-emerald-800 shadow-2xs"
                              >
                                Approve
                              </button>
                            )}
                            {rev.status !== "rejected" && (
                              <button
                                type="button"
                                onClick={() => handleReviewStatus(rev._id, "rejected")}
                                className="rounded border border-[#ded5c7] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#6b5c51] hover:bg-[#faf8f5]"
                              >
                                Reject
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleDeleteReview(rev._id)}
                              className="rounded bg-rose-700 px-2 py-1 text-[11px] font-semibold text-white hover:bg-rose-800 shadow-2xs"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "subscribers" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-xl border border-[#e8e2d8] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <input
                type="text"
                placeholder="Search subscribers by email..."
                value={subscriberSearch}
                onChange={(e) => setSubscriberSearch(e.target.value)}
                className="h-10 w-full rounded-lg border border-[#d8d0c4] bg-[#faf8f5] px-3 text-xs text-[#1e1915] placeholder-[#9a8e80] focus:border-[#8a4d2b] focus:bg-white focus:outline-none sm:w-80"
              />

              <button
                onClick={exportSubscribersCSV}
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#d4af37]/80 bg-[#faf6f0] px-4 text-xs font-semibold text-[#8a4d2b] transition-colors hover:bg-[#f4eee6]"
              >
                <span>📥 Export CSV</span>
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#e8e2d8] bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#e8e2d8] bg-[#f4efe8] text-[11px] uppercase tracking-wider text-[#5e5346]">
                  <tr>
                    <th className="px-4 py-3">Subscriber Email</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3">Registered At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede7df]">
                  {loadingSubscribers ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-xs text-[#827668]">
                        Loading audience...
                      </td>
                    </tr>
                  ) : (
                    filteredSubscribers.map((sub) => (
                      <tr key={sub._id} className="transition-colors hover:bg-[#faf7f2]">
                        <td className="px-4 py-3 font-medium text-[#1e1915]">{sub.email}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded px-2 py-0.5 text-[10px] font-medium ${
                              sub.status === "active"
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                : "bg-rose-50 text-rose-800 border border-rose-300"
                            }`}
                          >
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[#706456]">{sub.source}</td>
                        <td className="px-4 py-3 text-[#706456]">
                          {new Date(sub.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                  {filteredSubscribers.length === 0 && !loadingSubscribers && (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-xs text-[#827668]">
                        No newsletter subscribers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 4: MEDIA STUDIO ================= */}
        {activeTab === "media" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold tracking-wide text-[#1e1915]">
                High-Definition Media Studio
              </h3>
              <p className="mt-1 text-xs text-[#706456]">
                Upload high-resolution photography directly. Images are automatically transformed to
                next-generation WebP format (max width 1200px) and served through our global high-speed CDN.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#dcd4c8] bg-[#faf8f5] p-8 text-center transition-colors hover:border-[#8a4d2b] hover:bg-white">
                <svg className="h-10 w-10 text-[#8a4d2b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <div className="mt-3 text-xs font-semibold text-[#1e1915]">
                  Select jacket or accessory image to upload
                </div>
                <p className="mt-1 text-[11px] text-[#706456]">PNG, JPG, or WEBP up to 10MB</p>

                <label className="mt-4 cursor-pointer rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-[1.02]">
                  {uploadingMedia ? "Optimizing & Uploading..." : "Choose Image File"}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    disabled={uploadingMedia}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleBatchUpload(e.target.files, "mediaTab");
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Uploaded In Session */}
            {uploadedAssets.length > 0 && (
              <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold tracking-wide text-[#1e1915]">
                  Uploaded in Current Session
                </h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {uploadedAssets.map((asset, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg border border-[#e5ded4] bg-white p-3 shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset.url}
                        alt="Uploaded asset"
                        className="h-40 w-full rounded object-cover border border-[#e0d7cb]"
                      />
                      <div className="mt-2 text-[11px] text-[#706456]">
                        Format: <span className="font-semibold text-[#8a4d2b]">{asset.format}</span> ·{" "}
                        {asset.width}x{asset.height}px
                      </div>
                      <div className="mt-1 truncate text-[10px] text-[#8e8173]">
                        {asset.publicId}
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(asset.url);
                          showToast("Asset URL copied to clipboard!");
                        }}
                        className="mt-3 w-full rounded border border-[#ded6ca] bg-[#faf8f5] py-1.5 text-center text-xs font-medium text-[#8a4d2b] transition-colors hover:bg-[#f4eee6]"
                      >
                        Copy CDN URL
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: SYSTEM STATUS ================= */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#e8e2d8] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-semibold tracking-wide text-[#1e1915]">
                System Architecture &amp; Service Status
              </h3>
              <p className="mt-1 text-xs text-[#706456]">
                Operational telemetry and synchronized endpoints.
              </p>

              <div className="mt-6 divide-y divide-[#ede7df] text-xs">
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#6b6053]">API Gateway</span>
                  <span className="font-mono font-medium text-[#8a4d2b]">{getBackendUrl()}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#6b6053]">Database Engine</span>
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Connected &amp; Synchronized (Live)
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#6b6053]">High-Speed Media Storage</span>
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Operational &amp; Cached (Global CDN)
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#6b6053]">Session Security</span>
                  <span className="font-mono font-medium text-[#8a4d2b]">JWT Active (7-day validity)</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#6b6053]">Brand Houses Count</span>
                  <span className="font-medium text-[#1e1915]">7 Strict Categories (No Subcategories)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ================= PRODUCT ADD / EDIT MODAL ================= */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#e2dad0] bg-white p-6 shadow-2xl text-[#1e1915]">
            <div className="flex items-center justify-between border-b border-[#eee7de] pb-4">
              <h3 className="font-serif text-base font-bold tracking-wide text-[#1e1915]">
                {editingProduct ? "Edit Product Details" : "Create New Leather Craft Product"}
              </h3>
              <button
                onClick={() => setShowProductModal(false)}
                className="text-xs font-semibold text-[#7d7162] hover:text-[#1e1915]"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handleProductFormSubmit} className="mt-5 space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Product Title
                </label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="e.g. Schott NYC 618 Perfecto"
                  className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-sm text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Category (Brands &amp; Others)
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  >
                    {BRAND_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Price (USD $)
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-sm text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Discount (% Off)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="0"
                    value={productForm.discountPercent || 0}
                    onChange={(e) => setProductForm({ ...productForm, discountPercent: Math.min(100, Math.max(0, Number(e.target.value))) })}
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-sm text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                  {Boolean(productForm.discountPercent > 0) && (
                    <span className="mt-1 block text-[10px] font-bold text-[#8a4d2b]">
                      Sale: ${Math.round(productForm.price * (1 - productForm.discountPercent / 100))} (-{productForm.discountPercent}%)
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] p-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                />
              </div>

              {/* ── Product Photos & Visual Angles Management ── */}
              <div className="rounded-xl border border-[#ded6cb] bg-[#faf8f5] p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1e1915]">
                      Product Photography & Visual Angles
                    </label>
                    <p className="mt-0.5 text-[11px] text-[#706456]">
                      Upload multiple photos. Order dictates role on frontend (Cover, Hover, Gallery).
                    </p>
                  </div>

                  {/* Batch Upload Button */}
                  <label className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]">
                    {uploadingMedia ? (
                      <span>Optimizing & Uploading...</span>
                    ) : (
                      <>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <span>+ Upload Photos (Multi)</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      disabled={uploadingMedia}
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          handleBatchUpload(e.target.files, "form");
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Role Legend Guide */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] border-t border-b border-[#e7dfd4] py-2">
                  <div className="flex items-center gap-1.5 text-[#8a4d2b]">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#f4efe8] text-[10px] font-bold border border-[#e5dcd0]">1</span>
                    <span><strong>1st Photo:</strong> Default Cover on card</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-50 text-[10px] font-bold border border-sky-200">2</span>
                    <span><strong>2nd Photo:</strong> On Card Hover</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-stone-100 text-[10px] font-bold border border-stone-200">3+</span>
                    <span><strong>3rd+ Photo:</strong> PDP Gallery Thumbnails</span>
                  </div>
                </div>

                {/* Managed Photos Grid */}
                {productForm.images.length > 0 ? (
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {productForm.images.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className={`group relative overflow-hidden rounded-lg border bg-white p-2 shadow-xs transition-all ${
                          idx === 0
                            ? "border-[#8a4d2b] ring-1 ring-[#8a4d2b]/30"
                            : idx === 1
                            ? "border-sky-300 ring-1 ring-sky-300/30"
                            : "border-[#ded6cb]"
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgUrl}
                          alt={`Slot ${idx + 1}`}
                          className="h-28 w-full rounded object-cover border border-[#ede7df]"
                        />

                        {/* Badge role overlay */}
                        <div className="mt-1 flex items-center justify-between">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                              idx === 0
                                ? "bg-[#f4efe8] text-[#8a4d2b] border border-[#e5dcd0]"
                                : idx === 1
                                ? "bg-sky-50 text-sky-800 border border-sky-200"
                                : "bg-stone-100 text-stone-700 border border-stone-200"
                            }`}
                          >
                            {idx === 0 ? "Cover (1)" : idx === 1 ? "Hover (2)" : `Gallery (${idx + 1})`}
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-2 flex items-center justify-between border-t border-[#f0ebe3] pt-1.5">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              disabled={idx === 0}
                              onClick={() => handleMoveImage(idx, "up")}
                              title="Move left/up"
                              className="flex h-5 w-5 items-center justify-center rounded bg-[#f0ebe3] text-xs text-[#4a3f35] hover:bg-[#e4ddd4] disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                              ←
                            </button>
                            <button
                              type="button"
                              disabled={idx === productForm.images.length - 1}
                              onClick={() => handleMoveImage(idx, "down")}
                              title="Move right/down"
                              className="flex h-5 w-5 items-center justify-center rounded bg-[#f0ebe3] text-xs text-[#4a3f35] hover:bg-[#e4ddd4] disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                              →
                            </button>
                            {idx > 0 && (
                              <button
                                type="button"
                                onClick={() => handleSetDefaultImage(idx)}
                                title="Set as primary default cover"
                                className="rounded bg-[#f4efe8] px-1 py-0.5 text-[9px] font-medium text-[#8a4d2b] border border-[#e5dcd0] hover:bg-[#ede3d5]"
                              >
                                Set #1
                              </button>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            title="Remove photo"
                            className="flex h-5 w-5 items-center justify-center rounded bg-rose-50 text-[11px] text-rose-600 hover:bg-rose-100 border border-rose-200"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col items-center justify-center rounded-lg border border-dashed border-[#d8d0c3] bg-white py-7 text-center">
                    <svg className="h-7 w-7 text-[#9c9183]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="mt-2 text-xs font-medium text-[#1e1915]">No photos added yet</p>
                    <p className="mt-0.5 text-[11px] text-[#706456]">
                      Click &quot;+ Upload Photos&quot; above or paste an image URL below
                    </p>
                  </div>
                )}

                {/* Manual Image URL Add */}
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="url"
                    value={manualImageUrl}
                    onChange={(e) => setManualImageUrl(e.target.value)}
                    placeholder="Or paste external image URL (e.g. https://...)"
                    className="h-8 flex-1 rounded-lg border border-[#d8d0c3] bg-white px-2.5 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddManualImageUrl}
                    className="h-8 rounded-lg border border-[#d8d0c3] bg-[#f4efe8] px-3 text-xs font-semibold text-[#8a4d2b] hover:bg-[#ede3d5]"
                  >
                    + Add URL
                  </button>
                </div>
              </div>

              {/* ── DEDICATED COLORS SECTION ── */}
              <div className="rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6b6052]">
                      Product Colors (Dedicated Colorway Array)
                    </label>
                    <span className="text-[11px] text-[#8a7a6c]">
                      Add multiple colorways according to your product catalog
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#8a4d2b]">
                    {productForm.colors.length} {productForm.colors.length === 1 ? "color added" : "colors added"}
                  </span>
                </div>

                {/* Added Colors Badges */}
                <div className="flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-lg bg-white border border-[#ded5c7]">
                  {productForm.colors.length === 0 ? (
                    <span className="text-xs text-[#9c9183] italic">No colors added yet. Select a preset below or type a custom color.</span>
                  ) : (
                    productForm.colors.map((c, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#d6cdbf] bg-[#faf8f5] px-3 py-1 text-xs font-medium text-[#241e1a]"
                      >
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: c.hex || "#1a1a1a" }}
                          aria-hidden="true"
                        />
                        <span>{c.name}</span>
                        <span className="text-[10px] text-[#8a7a6c]">({c.hex})</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveColor(idx)}
                          className="ml-1 text-[#9c9183] hover:text-rose-600 transition-colors cursor-pointer text-sm font-bold"
                          title="Remove color"
                        >
                          ✕
                        </button>
                      </span>
                    ))
                  )}
                </div>

                {/* Quick Presets */}
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8a7a6c] mb-1.5">
                    Quick Add Leather Presets:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {PRESET_LEATHER_COLORS.map((preset) => {
                      const alreadyAdded = (productForm.colors || []).some(
                        (c) => c.name.toLowerCase() === preset.name.toLowerCase()
                      );
                      return (
                        <button
                          key={preset.name}
                          type="button"
                          disabled={alreadyAdded}
                          onClick={() => handleAddColor(preset.name, preset.hex)}
                          className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                            alreadyAdded
                              ? "opacity-40 cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400"
                              : "border-[#ded5c7] bg-white text-[#241e1a] hover:border-[#8a4d2b] hover:bg-[#f4efe8] cursor-pointer"
                          }`}
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full border border-black/20 shrink-0"
                            style={{ backgroundColor: preset.hex }}
                          />
                          <span>{preset.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Color Input */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#eee7de]">
                  <input
                    type="text"
                    value={customColorName}
                    onChange={(e) => setCustomColorName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddColor(customColorName, customColorHex);
                      }
                    }}
                    placeholder="Custom color name (e.g. Distressed Whiskey)"
                    className="h-9 flex-1 min-w-[180px] rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:outline-none"
                  />
                  <div className="flex items-center gap-1.5 rounded-lg border border-[#d6cdbf] bg-white px-2 h-9">
                    <input
                      type="color"
                      value={customColorHex}
                      onChange={(e) => setCustomColorHex(e.target.value)}
                      className="h-6 w-6 rounded border-0 bg-transparent cursor-pointer p-0"
                      title="Pick hex color"
                    />
                    <span className="text-xs font-mono text-[#5c5246]">{customColorHex}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddColor(customColorName, customColorHex)}
                    className="h-9 rounded-lg border border-[#8a4d2b] bg-[#8a4d2b] px-4 text-xs font-semibold text-white hover:bg-[#6e3d22] transition-colors cursor-pointer"
                  >
                    + Add Color
                  </button>
                </div>
              </div>

              {/* ── SIZES SECTION [XS to 6XL] ── */}
              <div className="rounded-xl border border-[#ded5c7] bg-[#faf8f5] p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6b6052]">
                      Available Sizes [XS to 6XL]
                    </label>
                    <span className="text-[11px] text-[#8a7a6c]">
                      Click pills to toggle sizes on/off (sizes 3XL–6XL automatically include +$20 hide surcharge on storefront)
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                    <button
                      type="button"
                      onClick={() => handleSetPresetSizes("all")}
                      className="rounded border border-[#d6cdbf] bg-white px-2 py-1 font-semibold text-[#8a4d2b] hover:bg-[#ede3d5] transition-colors cursor-pointer"
                    >
                      All (XS–6XL)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetPresetSizes("standard")}
                      className="rounded border border-[#d6cdbf] bg-white px-2 py-1 font-semibold text-[#8a4d2b] hover:bg-[#ede3d5] transition-colors cursor-pointer"
                    >
                      Standard (S–XL)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetPresetSizes("accessories")}
                      className="rounded border border-[#d6cdbf] bg-white px-2 py-1 font-semibold text-[#8a4d2b] hover:bg-[#ede3d5] transition-colors cursor-pointer"
                    >
                      Accessories (One Size)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSetPresetSizes("clear")}
                      className="rounded border border-[#d6cdbf] bg-white px-2 py-1 font-semibold text-[#706456] hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {/* Size toggle chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {ALL_AVAILABLE_SIZES.map((sz) => {
                    const parsedSizesList = productForm.sizes.split(",").map((s) => s.trim()).filter(Boolean);
                    const isSelected = parsedSizesList.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => handleToggleSize(sz)}
                        className={`h-8 px-3 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#2a1810] text-white shadow-xs border border-[#2a1810]"
                            : "bg-white text-[#241e1a] border border-[#d6cdbf] hover:border-[#8a4d2b] hover:bg-[#f5f1eb]"
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>

                {/* Editable manual input below */}
                <div>
                  <input
                    type="text"
                    value={productForm.sizes}
                    onChange={(e) => setProductForm({ ...productForm, sizes: e.target.value })}
                    placeholder="e.g. XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL"
                    className="h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-[#eee7de] pt-3">
                <label className="flex items-center gap-2 text-xs font-medium text-[#241e1a]">
                  <input
                    type="checkbox"
                    checked={productForm.inStock}
                    onChange={(e) => setProductForm({ ...productForm, inStock: e.target.checked })}
                    className="h-4 w-4 rounded border-[#d6cdbf] text-[#8a4d2b] focus:ring-[#8a4d2b]"
                  />
                  <span>Available in Stock</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-medium text-[#241e1a]">
                  <input
                    type="checkbox"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                    className="h-4 w-4 rounded border-[#d6cdbf] text-[#8a4d2b] focus:ring-[#8a4d2b]"
                  />
                  <span>Featured on Home Scroll Stage</span>
                </label>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#eee7de]">
                {editingProduct ? (
                  <button
                    type="button"
                    onClick={() => {
                      setProductToDelete({
                        id: editingProduct._id || editingProduct.id || editingProduct.slug,
                        name: editingProduct.name,
                      });
                    }}
                    className="rounded-lg border border-rose-200 bg-white px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>🗑️</span>
                    <span>Delete Piece</span>
                  </button>
                ) : <div />}

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowProductModal(false)}
                    className="rounded-lg border border-[#d8d0c4] bg-white px-4 py-2 text-xs font-semibold text-[#6b6052] hover:bg-[#f4efe8] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:brightness-105 active:scale-[0.99] cursor-pointer"
                  >
                    {editingProduct ? "Save Changes" : "Publish to Catalog"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Confirm Delete Product Modal ── */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-rose-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-bold text-lg">
                ⚠️
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1e1915]">
                  Delete Product
                </h3>
                <p className="text-xs text-[#827668]">Permanent Removal</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#52453c] mt-2">
              Are you sure you want to permanently delete{" "}
              <strong className="text-[#1e1915]">&quot;{productToDelete.name}&quot;</strong>?
              This action cannot be undone and will delete all associated Cloudinary images from storage.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-[#ede7df]">
              <button
                type="button"
                disabled={deletingProduct}
                onClick={() => setProductToDelete(null)}
                className="rounded-lg border border-[#dcd4c8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#52453c] hover:bg-[#faf7f2] disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deletingProduct}
                onClick={() => executeDeleteProduct(productToDelete.id, productToDelete.name)}
                className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer shadow-xs flex items-center gap-2"
              >
                {deletingProduct ? (
                  <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  "Permanently Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
          {/* ================= BLOG CREATE / EDIT MODAL ================= */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#e2dad0] bg-white p-6 shadow-2xl text-[#1e1915]">
            <div className="flex items-center justify-between border-b border-[#eee7de] pb-4">
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-[#1e1915]">
                  {editingBlog ? "Edit Journal Article" : "Compose New Journal Article"}
                </h3>
                <p className="text-xs text-[#786c5f]">
                  Write rich markdown articles with headers, blockquotes, comparisons, and images.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowBlogModal(false)}
                className="text-xs font-semibold text-[#7d7162] hover:text-[#1e1915] cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handleBlogFormSubmit} className="mt-5 space-y-5 text-xs">
              {/* Title & Subtitle */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={blogForm.title}
                    onChange={(e) => handleBlogTitleChange(e.target.value)}
                    placeholder="e.g. The Schott NYC 618 Perfecto Guide"
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-sm text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Subtitle / Catchphrase
                  </label>
                  <input
                    type="text"
                    value={blogForm.subtitle}
                    onChange={(e) => setBlogForm({ ...blogForm, subtitle: e.target.value })}
                    placeholder="e.g. History, Tannage Forensics & Sizing Anatomy"
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-sm text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Slug & Category */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    URL Slug (/blog/[slug]) *
                  </label>
                  <input
                    type="text"
                    required
                    value={blogForm.slug}
                    onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                    placeholder="e.g. schott-nyc-618-perfecto-guide"
                    className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs font-mono text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Editorial Category
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      className="h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                    >
                      {BLOG_PRESET_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      placeholder="Custom category"
                      className="h-10 w-44 rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Image URL & Direct Cloudinary Upload */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Cover Image URL &amp; Direct Cloudinary Upload
                </label>
                <div className="mt-1 flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="text"
                    value={blogForm.coverImage}
                    onChange={(e) => setBlogForm({ ...blogForm, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/... or Cloudinary URL"
                    className="h-10 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                  />
                  <label className="relative shrink-0 cursor-pointer rounded-lg border border-[#d6cdbf] bg-white px-4 py-2 text-xs font-semibold text-[#8a4d2b] hover:bg-[#faf7f2] flex items-center gap-1.5 shadow-2xs">
                    <span>{uploadingBlogCover ? "Uploading..." : "📷 Upload Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      disabled={uploadingBlogCover}
                      onChange={(e) => handleBlogCoverUpload(e.target.files)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
                {blogForm.coverImage && (
                  <div className="mt-2 flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blogForm.coverImage}
                      alt="Cover Preview"
                      className="h-14 w-24 rounded-lg border border-[#e8e2d8] object-cover"
                    />
                    <span className="text-[11px] text-[#786c5f]">Cover Preview</span>
                  </div>
                )}
              </div>

              {/* Excerpt / Summary */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Article Excerpt / Lead Paragraph
                </label>
                <textarea
                  rows={2}
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  placeholder="A concise synopsis shown on the /blog listing page and search engine snippets..."
                  className="mt-1 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] p-3 text-xs text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none"
                />
              </div>

              {/* Content Editor with Markdown Preview Toggle */}
              <div>
                <div className="flex items-center justify-between pb-1.5">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Article Content (Markdown Supported) *
                  </label>
                  <div className="flex items-center gap-1 rounded-lg border border-[#d6cdbf] bg-[#faf8f5] p-0.5">
                    <button
                      type="button"
                      onClick={() => setBlogPreviewMode(false)}
                      className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        !blogPreviewMode ? "bg-[#8a4d2b] text-white" : "text-[#786c5f] hover:text-[#1e1915]"
                      }`}
                    >
                      ✏️ Write Markdown
                    </button>
                    <button
                      type="button"
                      onClick={() => setBlogPreviewMode(true)}
                      className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        blogPreviewMode ? "bg-[#8a4d2b] text-white" : "text-[#786c5f] hover:text-[#1e1915]"
                      }`}
                    >
                      👁️ Live Preview
                    </button>
                  </div>
                </div>

                {blogPreviewMode ? (
                  <div className="rounded-xl border border-[#ded5c7] bg-[#f7f4ef] p-6 max-h-[460px] overflow-y-auto">
                    <MarkdownRenderer content={blogForm.content} />
                  </div>
                ) : (
                  <div>
                    <textarea
                      rows={14}
                      required
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Write your article in Markdown. Use ## for headings, > for blockquotes, - for bullet lists, and | for comparison tables..."
                      className="w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] p-3 text-xs font-mono text-[#1e1915] placeholder-[#9c9183] focus:border-[#8a4d2b] focus:bg-white focus:outline-none leading-relaxed"
                    />
                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[10px] text-[#786c5f]">
                      <span className="font-semibold text-[#8a4d2b]">Syntax Cheatsheet:</span>
                      <span><code className="bg-[#ede7de] px-1 rounded">## Heading 2</code></span>
                      <span><code className="bg-[#ede7de] px-1 rounded">### Heading 3</code></span>
                      <span><code className="bg-[#ede7de] px-1 rounded">**bold**</code></span>
                      <span><code className="bg-[#ede7de] px-1 rounded">&gt; Blockquote</code></span>
                      <span><code className="bg-[#ede7de] px-1 rounded">- Bullet point</code></span>
                      <span><code className="bg-[#ede7de] px-1 rounded">| Header 1 | Header 2 |</code></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Author, Reading Time & Tags */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={blogForm.authorName}
                    onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Author Role / Title
                  </label>
                  <input
                    type="text"
                    value={blogForm.authorRole}
                    onChange={(e) => setBlogForm({ ...blogForm, authorRole: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Estimated Reading Time
                  </label>
                  <input
                    type="text"
                    value={blogForm.readingTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readingTime: e.target.value })}
                    placeholder="e.g. 6 min read"
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
              </div>

              {/* Tags & Status Checkboxes */}
              <div className="grid gap-4 sm:grid-cols-2 items-center border-t border-[#eee7de] pt-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    placeholder="schott, perfecto, sizing, patina"
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-[#faf8f5] px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <label className="flex items-center gap-2 text-xs font-medium text-[#241e1a] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={blogForm.isPublished}
                      onChange={(e) => setBlogForm({ ...blogForm, isPublished: e.target.checked })}
                      className="h-4 w-4 rounded border-[#d6cdbf] text-[#8a4d2b] focus:ring-[#8a4d2b]"
                    />
                    <span>Publish Article Live</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-medium text-[#241e1a] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={blogForm.featured}
                      onChange={(e) => setBlogForm({ ...blogForm, featured: e.target.checked })}
                      className="h-4 w-4 rounded border-[#d6cdbf] text-[#8a4d2b] focus:ring-[#8a4d2b]"
                    />
                    <span>Featured in Journal Hero</span>
                  </label>
                </div>
              </div>

              {/* SEO Meta Fields */}
              <div className="rounded-xl border border-[#e8e2d8] bg-[#faf8f5] p-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a4d2b]">
                  Search Engine Optimization (SEO Meta)
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6b6052]">Meta Title Tag</label>
                    <input
                      type="text"
                      value={blogForm.metaTitle}
                      onChange={(e) => setBlogForm({ ...blogForm, metaTitle: e.target.value })}
                      placeholder="Title tag for Google results"
                      className="mt-1 h-8 w-full rounded-md border border-[#d6cdbf] bg-white px-2.5 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6b6052]">Meta Description</label>
                    <input
                      type="text"
                      value={blogForm.metaDescription}
                      onChange={(e) => setBlogForm({ ...blogForm, metaDescription: e.target.value })}
                      placeholder="Search engine snippet summary"
                      className="mt-1 h-8 w-full rounded-md border border-[#d6cdbf] bg-white px-2.5 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#eee7de]">
                {editingBlog ? (
                  <button
                    type="button"
                    onClick={() => {
                      setBlogToDelete({
                        id: editingBlog._id || editingBlog.slug,
                        title: editingBlog.title,
                      });
                    }}
                    className="rounded-lg border border-rose-200 bg-white px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>🗑️</span>
                    <span>Delete Article</span>
                  </button>
                ) : <div />}

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(false)}
                    className="rounded-lg border border-[#d8d0c4] bg-white px-4 py-2 text-xs font-semibold text-[#6b6052] hover:bg-[#f4efe8] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg border border-[#8a4d2b]/60 bg-gradient-to-r from-[#8a4d2b] to-[#a35c34] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:brightness-105 active:scale-[0.99] cursor-pointer"
                  >
                    {editingBlog ? "Save Changes" : "Publish Article"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Order Status & Courier Tracking Modal ── */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a110c]/70 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-[#ded5c7] bg-[#fbf9f6] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#ded5c7] pb-3 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a4d2b]">
                  Order Management
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2a1810]">
                  Update {selectedOrder.orderNumber}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ded5c7] bg-white text-xs font-bold text-[#6b5c51] hover:text-[#2a1810] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleOrderFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Workshop &amp; Delivery Stage
                </label>
                <select
                  value={orderForm.orderStatus}
                  onChange={(e) => setOrderForm({ ...orderForm, orderStatus: e.target.value })}
                  className="mt-1 h-10 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                >
                  <option value="order_placed">1. Order Placed &amp; Ticket Drafted</option>
                  <option value="leather_selected">2. Premium Hide Selected &amp; Bench-Cut</option>
                  <option value="crafting_in_progress">3. Artisan Tailoring &amp; Hardware Assembly</option>
                  <option value="quality_inspection">4. Workshop Quality &amp; Fit Inspection</option>
                  <option value="dispatched">5. Dispatched via Air Freight</option>
                  <option value="in_transit">6. In International Transit</option>
                  <option value="delivered">7. Successfully Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Air Courier Carrier
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DHL Express, FedEx, UPS"
                    value={orderForm.courier}
                    onChange={(e) => setOrderForm({ ...orderForm, courier: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                    Airway Bill / Tracking Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 982348123"
                    value={orderForm.trackingNumber}
                    onChange={(e) => setOrderForm({ ...orderForm, trackingNumber: e.target.value })}
                    className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Live Courier Tracking URL
                </label>
                <input
                  type="url"
                  placeholder="https://www.dhl.com/en/express/tracking.html?AWB=..."
                  value={orderForm.trackingUrl}
                  onChange={(e) => setOrderForm({ ...orderForm, trackingUrl: e.target.value })}
                  className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6b6052]">
                  Atelier Activity Log Note
                </label>
                <input
                  type="text"
                  placeholder="e.g. Handed over to DHL Express Air Freight at JFK depot."
                  value={orderForm.note}
                  onChange={(e) => setOrderForm({ ...orderForm, note: e.target.value })}
                  className="mt-1 h-9 w-full rounded-lg border border-[#d6cdbf] bg-white px-3 text-xs text-[#1e1915] focus:border-[#8a4d2b] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowOrderModal(false)}
                  className="rounded-lg border border-[#ded5c7] px-4 py-2 text-xs font-semibold text-[#6b5c51]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2a1810] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3d2417] shadow-xs"
                >
                  Save &amp; Update Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Confirm Delete Blog Modal ── */}
      {blogToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-rose-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-bold text-lg">
                ⚠️
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1e1915]">
                  Delete Journal Article
                </h3>
                <p className="text-xs text-[#827668]">Permanent Removal</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#52453c] mt-2">
              Are you sure you want to permanently delete{" "}
              <strong className="text-[#1e1915]">&quot;{blogToDelete.title}&quot;</strong>?
              This article will immediately be removed from /blog and sitemap indexes.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-[#ede7df]">
              <button
                type="button"
                disabled={deletingBlog}
                onClick={() => setBlogToDelete(null)}
                className="rounded-lg border border-[#dcd4c8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#52453c] hover:bg-[#faf7f2] disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={deletingBlog}
                onClick={() => executeDeleteBlog(blogToDelete.id, blogToDelete.title)}
                className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer shadow-xs flex items-center gap-2"
              >
                {deletingBlog ? (
                  <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  "Permanently Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
</div>
  );
}
