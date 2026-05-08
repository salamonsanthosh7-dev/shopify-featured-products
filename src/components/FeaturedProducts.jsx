export default function FeaturedProducts({
  featuredProducts
}) {
  return (
    <s-section>

      <s-heading>
        Featured Products
      </s-heading>

      {featuredProducts.length === 0 ? (

        <s-banner tone="info">
          No featured products selected
        </s-banner>

      ) : (

        featuredProducts.map((product) => (

          <s-card key={product.id}>

            <s-stack
              direction="inline"
              align="center"
              gap="base"
            >

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                width="70"
                height="70"
                loading="lazy"
                style={{
                  borderRadius: "10px",
                  objectFit: "cover"
                }}
              />

              {/* Product Info */}
              <s-stack gap="small">

                <s-text>
                  {product.title}
                </s-text>

                <s-badge tone="success">
                  Featured
                </s-badge>

              </s-stack>

            </s-stack>

          </s-card>

        ))
      )}

    </s-section>
  );
}