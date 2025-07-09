// src/components/ProductCard.tsx

import type { Product } from "../hooks/useProducts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-lg p-4 transition-all bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-3"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
}
