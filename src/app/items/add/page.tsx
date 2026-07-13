"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authFetch } from "@/lib/authFetch";

export default function AddItemPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    location: "",
    type: "Apartment",
    bedrooms: "",
    bathrooms: "",
    area: "",
  });
//   const [imageUrl, setImageUrl] = useState("");
const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const files = e.target.files;

  if (!files || files.length === 0) return;

  if (imageUrls.length + files.length > 6) {
    setError("You can upload a maximum of 6 images.");
    return;
  }

  setIsUploading(true);
  setError("");

  try {
    const API_KEY = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;

    const uploadPromises = Array.from(files).map(async (file) => {
      if (file.size > 5 * 1024 * 1024) {
        throw new Error(`${file.name} exceeds the 5MB limit.`);
      }

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(`Failed to upload ${file.name}`);
      }

      return data.data.url;
    });

    const uploadedImages = await Promise.all(uploadPromises);

    setImageUrls((prev) => [...prev, ...uploadedImages]);
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Image upload failed.");
    }
  } finally {
    setIsUploading(false);

    // Allow selecting the same file again later
    e.target.value = "";
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title || !form.shortDescription || !form.fullDescription || !form.price || !form.location) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const payload = {
      title: form.title,
      shortDescription: form.shortDescription,
      fullDescription: form.fullDescription,
      price: Number(form.price),
      location: form.location,
      type: form.type,
      bedrooms: Number(form.bedrooms) || 0,
      bathrooms: Number(form.bathrooms) || 0,
      area: Number(form.area) || 0,

    images:
  imageUrls.length > 0
    ? imageUrls
    : ["https://loremflickr.com/800/600/apartment,rental"],
    };

    try {
      const res = await authFetch("/properties", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add property");

      router.push("/items/manage");
    } catch {
      setError("Something went wrong while submitting your listing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold text-slate-900 mb-1">List a Property</h1>
      <p className="text-slate-500 mb-8">Fill in the details below to add your property to NestHaven.</p>

      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="e.g. Sunny 2-Bed Apartment in Gulshan"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Short Description *</label>
          <input
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="One-line summary shown on the listing card"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Description *</label>
          <textarea
            name="fullDescription"
            value={form.fullDescription}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Detailed description shown on the property's details page"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Price (BDT/month) *</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="45000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="e.g. Gulshan, Dhaka"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Studio">Studio</option>
              <option value="Shared Room">Shared Room</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bedrooms</label>
            <input
              name="bedrooms"
              type="number"
              value={form.bedrooms}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bathrooms</label>
            <input
              name="bathrooms"
              type="number"
              value={form.bathrooms}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Area (sq ft)</label>
            <input
              name="area"
              type="number"
              value={form.area}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          
          <div>
  <label className="block text-sm font-medium text-slate-700 mb-2">
    Property Images
  </label>

  <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md bg-teal-700 text-white hover:bg-teal-800 transition">
    Select Images

    <input
      type="file"
      accept="image/png,image/jpeg"
      multiple
      onChange={handleImageUpload}
      className="hidden"
    />
  </label>

  <p className="text-xs text-slate-500 mt-2">
    Upload up to 6 PNG/JPG images (max 5MB each).
  </p>

  {isUploading && (
    <p className="text-sm text-teal-600 mt-2">
      Uploading images...
    </p>
  )}

  {imageUrls.length > 0 && (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-4">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="relative group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt={`Property ${index + 1}`}
            className="w-full h-20 rounded-lg object-cover border"
          />

          <button
            type="button"
            onClick={() =>
              setImageUrls((prev) =>
                prev.filter((_, i) => i !== index)
              )
            }
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-xs opacity-0 group-hover:opacity-100 transition"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )}
</div>

        </div>

        <button
          type="submit"
          disabled={loading || isUploading}
          className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white rounded-md py-3 text-sm font-medium transition"
        >
          {loading ? "Submitting..." : "Submit Listing"}
        </button>
      </form>
    </div>
  );
}