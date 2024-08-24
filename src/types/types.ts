interface Product {
    id: number;
    name: string;
    description: string;
    ean: string;
    upc: string;
    image: string;
    images: string[];
    net_price: number;
    taxes: string;
    price: string;
    categories: string[];
    tags: string[];
  }
  
  export interface ProductResponse {
    data: Product[];
  }
  