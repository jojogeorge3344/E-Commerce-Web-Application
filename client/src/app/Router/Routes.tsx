import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import AboutPage from "../../Features/About/AboutPage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetailsPage from "../../Features/Catalog/ProductDetails";
import ContactPage from "../../Features/Contacts/ContactPage";
import HomePage from "../../Features/Home/HomePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {path:'',element:<HomePage/>},
            {path:'catalog',element:<Catalog/>},
            {path:'catalog/:id',element:<ProductDetailsPage/>},
            {path:'about',element:<AboutPage/>},
            {path:'contact',element:<ContactPage/>}

        ]
    }
])