import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="container py-5">

      <div className="page-title">

        <span>OUR COLLECTION</span>

        <h1>All Products</h1>

        <p>
          Explore our latest technology accessories.
        </p>

      </div>

      <div className="row mb-4">

        <div className="col-md-6">

          <div className="search-box">

            <i className="bi bi-search"></i>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

        <div className="col-md-6 text-md-end mt-3 mt-md-0">

          <select className="sort-select">

            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>

          </select>

        </div>

      </div>

      <div className="row g-4">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      {filteredProducts.length === 0 && (

        <div className="empty-state">

          <i className="bi bi-search"></i>

          <h4>No products found</h4>

          <p>Try another search.</p>

        </div>

      )}

    </section>
  );
}

export default Products;