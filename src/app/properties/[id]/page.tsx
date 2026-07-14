import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyById, getProperties } from "@/lib/api";
import PropertyCard from "@/components/PropertyCard";
import { FadeIn } from "@/components/Animated";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  let property;
  try {
    property = await getPropertyById(id);
  } catch {
    notFound();
  }

  if (!property) notFound();

  // Related properties: same type, excluding this one
  const relatedParams = new URLSearchParams();
  relatedParams.set("type", property.type);
  relatedParams.set("limit", "4");
  const relatedData = await getProperties(relatedParams);
  const related = relatedData.properties.filter((p) => p._id !== property._id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          <Link href="/properties" className="hover:text-emerald-600">Explore</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 dark:text-slate-300">{property.title}</span>
        </nav>
      </FadeIn>

      {/* Image gallery */}
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          <div className="md:col-span-3 relative h-96 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
            {property.images.slice(1, 3).map((img, i) => (
              <div key={i} className="relative h-[186px] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image src={img} alt={`${property.title} ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <FadeIn>
            <div>
              <span className="inline-block bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm text-emerald-600 dark:text-emerald-300 text-xs font-medium px-2 py-1 rounded-lg mb-3">
                {property.type}
              </span>
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">{property.title}</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">{property.location}</p>
            </div>
          </FadeIn>

          {/* Overview */}
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{property.fullDescription}</p>
            </section>
          </FadeIn>

          {/* Specifications */}
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Information</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-white/5">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{property.bedrooms}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bedrooms</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-white/5">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{property.bathrooms}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bathrooms</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-white/5">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{property.area}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Sq ft</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-white/5">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">★ {property.rating}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Rating</p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Reviews (static structure, honest since no review system built) */}
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Reviews</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                This property has an average rating of {property.rating} out of 5 based on tenant feedback.
              </p>
            </section>
          </FadeIn>
        </div>

        {/* Sidebar */}
        <FadeIn>
          <div>
            <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-2xl p-6 sticky top-24">
              <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                ৳{property.price.toLocaleString()}
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/mo</span>
              </p>
              <div className="border-t border-white/20 dark:border-white/10 my-4" />
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Listed by</p>
              <p className="font-medium text-slate-900 dark:text-slate-100 mb-4">{property.ownerName}</p>
              <Link
                href="/contact"
                className="block text-center bg-emerald-600/80 hover:bg-emerald-700 backdrop-blur-sm text-white rounded-xl py-3 text-sm font-medium transition"
              >
                Contact Owner
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Related properties */}
      {related.length > 0 && (
        <FadeIn as="section" className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Related Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <PropertyCard key={p._id} property={p} />
            ))}
          </div>
        </FadeIn>
      )}
    </div>
  );
}