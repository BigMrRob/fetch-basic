# Product Dashboard

This project is a Next.js application that displays a product dashboard with various charts and a paginated product list.

## Getting Started

To run this program, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application

## Libraries and Packages Used

- **Next.js**: React framework for building the application
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Recharts**: Composable charting library built on React components
- **shadcn/ui**: UI component library for styling
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure

- `src/app/page.tsx`: Main page component (Server Component)
- `src/components/`: Directory containing all React components
  - `ProductDashboard.tsx`: Client Component for fetching data and rendering the dashboard
  - `PaginatedProductList.tsx`: Client Component for displaying paginated product list
  - `PriceDistributionChart.tsx`: Client Component for price distribution chart
  - `CategoryDistributionChart.tsx`: Client Component for category distribution chart

## Server vs Client Components

- **Server Components**: 
  - `src/app/page.tsx`: Renders the layout and includes the ProductDashboard component
- **Client Components**: 
  - All components in `src/components/` directory
  - These components are marked with `"use client";` directive and handle client-side interactivity and data fetching

## Data Fetching

Data is fetched client-side in the `ProductDashboard` component using the Fetch API.

## Key Features

1. **Paginated Product List**: Displays products with images, names, descriptions, and prices
2. **Price Distribution Chart**: Bar chart showing the distribution of product prices
3. **Category Distribution Chart**: Pie chart displaying the top 5 product categories

## Styling

The project uses Tailwind CSS for styling, along with components from the shadcn/ui library.

