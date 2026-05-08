export default function ProductCard({
  product,
  toggleFeatured
}) {
  return (

    <s-card>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >

        {/* LEFT SIDE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px"
          }}
        >

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            width="80"
            height="80"
            loading="lazy"
            style={{
              borderRadius: "12px",
              objectFit: "cover"
            }}
          />

          {/* Product Info */}
          <div>

            <s-text>
              {product.title}
            </s-text>

            <br />

            {product.featured && (
              <s-badge tone="success">
                Featured
              </s-badge>
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <s-switch
          checked={product.featured}
          onChange={() =>
            toggleFeatured(product.id)
          }
        >
        </s-switch>

      </div>

    </s-card>
  );
}