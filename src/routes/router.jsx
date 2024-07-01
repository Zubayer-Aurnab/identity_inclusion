import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/about',
                element: <AboutUs />
            }
        ]
    },
]);