import App from "./App";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
            children:[
                {path:"",element: <Home />},
                {path:"/products",element:<Product/>}
            ]

        }
    ]
)
export default router;