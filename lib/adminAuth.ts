export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "superadmin" | "stakeholder" | "editor";
  lastLogin?: string;
}

const TOKEN_KEY = "lhc_admin_token";
const USER_KEY = "lhc_admin_user";

export function getBackendUrl(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
}

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminSession(token: string, user: AdminUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAdminSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getAdminUser(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AdminUser;
  } catch {
    return null;
  }
}

export async function adminFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const backendUrl = getBackendUrl();
  const token = getAdminToken();

  const headers = new Headers(options.headers || {});
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const url = endpoint.startsWith("http") ? endpoint : `${backendUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (res.status === 401 && typeof window !== "undefined") {
    clearAdminSession();
    if (!window.location.pathname.includes("/admin/login")) {
      window.location.href = "/admin/login?expired=1";
    }
  }

  return res;
}
