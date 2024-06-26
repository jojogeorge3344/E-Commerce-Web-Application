// If we added any new pages, we should add the page url here.

import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import AboutPage from "../../Features/About/AboutPage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetailsPage from "../../Features/Catalog/ProductDetails";
import ContactPage from "../../Features/Contacts/ContactPage";
import HomePage from "../../Features/Home/HomePage";
import ServerError from "../ErrorHandlers/ServerError";
import NotFoundError from "../ErrorHandlers/NotFoundError";
import BasketPage from "../../Features/Basket/BasketPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path:'',element:<HomePage/>},
            {path:'catalog',element:<Catalog/>},
            {path:'catalog/:id',element:<ProductDetailsPage/>},
            {path:'about',element:<AboutPage/>},
            {path:'contact',element:<ContactPage/>},
            {path:'server-error',element:<ServerError/>},
            {path:'not-found',element:<NotFoundError/>},
            {path:'basket',element:<BasketPage/>},
            {path:'*',element:<Navigate replace to='/not-found'/>}


        ]
    }
])