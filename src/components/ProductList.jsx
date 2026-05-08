import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  toggleFeatured
}) {
  return (
    <s-section>

      <s-heading>
        All Products
      </s-heading>

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          toggleFeatured={toggleFeatured}
        />

      ))}

    </s-section>
  );
}