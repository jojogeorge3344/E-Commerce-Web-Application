import { Grid, List } from "@mui/material";
import { Product } from "../../app/Models/product";
import ProductCard from "./ProductCard";

interface Props{
    products:Product[];
}

export default function ProductList({products}: Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                //In this line setuping the product images in a row. its working based on our input count.
                <Grid item xs={3} key={product.id}>
                <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}