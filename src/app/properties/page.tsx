import { Suspense } from "react";
import { getProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";
import PropertyCardSkeleton from "@/components/PropertyCardSkeleton";
import PropertiesFilterBar from "@/components/PropertiesFilterBar";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

async function PropertiesList({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const params = new URLSearchParams();
  if (searchParams.q) params.set("search", searchParams.q);
  if (searchParams.type) params.set("type", searchParams.type);
  if (searchParams.location) params.set("location", searchParams.location);
  if (searchParams.minPrice) params.set("minPrice", searchParams.minPrice);
  if (searchParams.maxPrice) params.set("maxPrice", searchParams.maxPrice);
  if (searchParams.sort) params.set("sort", searchParams.sort);
  params.set("page", searchParams.page || "1");
  params.set("limit", "8");

  const { properties, total, page, totalPages } = await getProperties(params);

  if (properties.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">No properties match your search. Try adjusting your filters.</p>
      </div>
    );
  }

  const buildPageLink = (p: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", String(p));
    return `/properties?${newParams.toString()}`;
  };

  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{total} properties found</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={buildPageLink(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-md text-sm transition ${
                p === page
                  ? "bg-teal-700 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 mb-2">Explore Properties</h1>
      <p className="text-slate-500 mb-6">Browse and filter available rentals across Dhaka.</p>

      <PropertiesFilterBar />

      <Suspense fallback={<LoadingGrid />} key={JSON.stringify(resolvedParams)}>
        <PropertiesList searchParams={resolvedParams} />
      </Suspense>
    </div>
  );
}