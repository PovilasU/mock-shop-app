// src/pages/Home.tsx or App.tsx
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mock Shop</h1>
      {loading ? <p>Loading...</p> : <ProductGrid products={products} />}
    </div>
  );
}
