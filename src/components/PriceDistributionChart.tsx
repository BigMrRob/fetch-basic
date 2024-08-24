"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Product {
  price: string;
}

interface PriceDistributionChartProps {
  products: Product[];
}

export function PriceDistributionChart({ products }: PriceDistributionChartProps) {
  const priceRanges = [
    { range: '0-50', count: 0 },
    { range: '51-100', count: 0 },
    { range: '101-200', count: 0 },
    { range: '201-500', count: 0 },
    { range: '500+', count: 0 },
  ];

  products.forEach(product => {
    const price = parseFloat(product.price);
    if (price <= 50) priceRanges[0].count++;
    else if (price <= 100) priceRanges[1].count++;
    else if (price <= 200) priceRanges[2].count++;
    else if (price <= 500) priceRanges[3].count++;
    else priceRanges[4].count++;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={priceRanges}>
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}