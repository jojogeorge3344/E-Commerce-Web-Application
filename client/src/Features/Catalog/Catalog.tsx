import { Product } from "../../app/Models/product"
import agent from "../../app/ErrorHandlers/UIErrorHandler";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //if(loading) return;
    agent.Catalog.list()
      .then(products => {
        setProducts(products)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message="Loading Products..." />

  return (
    <>
      <ProductList products={products} />
    </>
  )

}