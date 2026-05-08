## Planning & Logic

To build a Shopify app feature for marking products as "Featured", I would use Shopify Admin API along with Shopify Metafields.

### Approach

Each product would contain a custom metafield:

featured: true / false

This metafield would determine whether the product is featured inside the merchant dashboard.

### Dashboard Flow

1. Fetch products from Shopify Admin API
2. Store products in React state
3. Display all products in a dashboard UI
4. Allow merchants to toggle featured status
5. Update featured state instantly in the UI
6. Sync changes back to Shopify using API requests
7. Filter and display featured products separately

### Logic Used

- React `useState` is used for managing product state
- `map()` is used to update featured status dynamically
- `filter()` is used to display featured products separately
- Search functionality improves product discovery for merchants
- Shopify App Web Components provide a Shopify-native admin experience

### UX Improvements

To improve usability, I added:

- Product search
- Featured badges
- Dashboard statistics
- Product thumbnails
- Separate featured products section

This structure keeps the feature scalable, reusable, and aligned with Shopify's admin experience.
