// src/hooks/useProducts.ts
import { useEffect, useState } from "react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        {
          products(first: 20) {
            edges {
              node {
                id
                title
                description
                featuredImage {
                  url
                }
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const res = await fetch("https://mock.shop/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();

      const mapped = json.data.products.edges.map((edge: any) => {
        const node = edge.node;
        return {
          id: node.id,
          title: node.title,
          description: node.description,
          image: node.featuredImage?.url ?? "",
          price: parseFloat(
            node.variants.edges[0].node.price.amount
          ),
        };
      });

      setProducts(mapped);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading };
}
