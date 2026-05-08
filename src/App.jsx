import { useState } from "react";

import productsData from "./data/products";

import ProductList from "./components/ProductList";

import FeaturedProducts from "./components/FeaturedProducts";

export default function App() {

  const [products, setProducts] =
    useState(productsData);

  // Toggle featured status
  const toggleFeatured = (id) => {

    const updatedProducts = products.map(
      (product) =>
        product.id === id
          ? {
              ...product,
              featured: !product.featured
            }
          : product
    );

    setProducts(updatedProducts);
  };

  // Filter featured products
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <s-page>

      <s-heading>
        Shopify Featured Products Dashboard
      </s-heading>

      <ProductList
        products={products}
        toggleFeatured={toggleFeatured}
      />

      <FeaturedProducts
        featuredProducts={featuredProducts}
      />

    </s-page>
  );
}