import { PropertiesResponse, Property } from "@/types/property";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProperties(params: URLSearchParams): Promise<PropertiesResponse> {
  const res = await fetch(`${API_URL}/properties?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch properties");
  return res.json();
}

export async function getPropertyById(id: string): Promise<Property> {
  const res = await fetch(`${API_URL}/properties/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch property");
  return res.json();
}