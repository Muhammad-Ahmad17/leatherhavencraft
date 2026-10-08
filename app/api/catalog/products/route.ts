import { NextResponse } from "next/server";
import { fetchPaginatedProducts } from "@/data/products";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 16;
    const category = searchParams.get("category") || undefined;
    const brand = searchParams.get("brand") || undefined;
    const cut = searchParams.get("cut") || undefined;
    const size = searchParams.get("size") || undefined;
    const color = searchParams.get("color") || undefined;
    const sort = searchParams.get("sort") || undefined;
    const search = searchParams.get("search") || undefined;

    const data = await fetchPaginatedProducts({
      page,
      limit,
      category,
      brand,
      cut,
      size,
      color,
      sort,
      search,
    });

    return NextResponse.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[API catalog error]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
