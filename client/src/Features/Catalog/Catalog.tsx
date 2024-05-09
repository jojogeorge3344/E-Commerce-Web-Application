import { Product } from "../../app/Models/product"
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
        const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:1576/api/Product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return(
        <>
<ProductList products={products}/>
        </>
    )
    
}