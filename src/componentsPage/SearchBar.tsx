"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      const formattedQuery = query.trim().split(" ").join("/"); // Format query menjadi segment URL
      router.push(`/product/${formattedQuery}`);
    } else {
      router.push("/product"); // Jika tidak ada query, arahkan ke semua produk
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}
