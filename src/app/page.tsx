import { GET } from "./api/products/route";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaginatedProductList } from "@/components/PaginatedProductList";
import { PriceDistributionChart } from "@/components/PriceDistributionChart";
import { CategoryDistributionChart } from "@/components/CategoryDistributionChart";
import { ProductResponse } from "@/types/types";


export default async function Home() {
  const response = await GET()
  const products: ProductResponse = await response.json()

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <PaginatedProductList products={products.data} />
        </TabsContent>
        
        <TabsContent value="charts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PriceDistributionChart products={products.data} />
            <CategoryDistributionChart products={products.data} />
          </div>
        </TabsContent>
      </Tabs>ˆ
    </main>
  );
}