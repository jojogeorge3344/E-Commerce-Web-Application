import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/Models/product";

export default function ProductDetailsPage(){
const{id}=useParams<{id:string}>();
const [product,setProducts]=useState<Product | null>(null);
const [loading,setLoading]= useState(true);

useEffect(()=>{
    axios.get(`http://localhost:1576/api/Product/${id}`)
    .then(Response=>setProducts(Response.data))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false));
},[id])

if(loading)return <h3>Loading...</h3>

if(!product) return<h3>Product Not Found</h3>
    return(
        <Typography variant="h2">
            {product.name}
        </Typography>
    )
}