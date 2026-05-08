export default function DashboardStats({
  totalProducts,
  featuredCount
}) {
  return (
    <s-stack
      direction="inline"
      gap="large"
    >

      <s-box padding="base">

        <s-heading>
          Total Products
        </s-heading>

        <s-text>
          {totalProducts}
        </s-text>

      </s-box>

      <s-box padding="base">

        <s-heading>
          Featured Products
        </s-heading>

        <s-text>
          {featuredCount}
        </s-text>

      </s-box>

    </s-stack>
  );
}