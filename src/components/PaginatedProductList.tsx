"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface PaginatedProductListProps {
  products: Product[];
}

export function PaginatedProductList({ products }: PaginatedProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {currentProducts.map(product => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="flex-shrink-0 p-3">
              <CardTitle className="line-clamp-1 text-sm">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col">
              <div className="relative w-full aspect-[3/2] flex-shrink-0 h-24">
                <Image 
                  src={"/placeholder.webp"} 
                  alt={product.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-3 flex-grow">
                <p className="text-xs mb-1 line-clamp-2">{product.description}</p>
                <p className="font-bold text-sm">Price: ${product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink 
                href="#" 
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}