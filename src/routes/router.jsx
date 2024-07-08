import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Psycho_Social_Support from "../pages/Psycho_Social_Support/Psycho_Social_Support";
import Advocacy from "../pages/Advocacy/Advocacy";
import Consultancy from "../pages/Consultancy/Consultancy";
import Capacity from "../pages/Capacity/Capacity";
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
            },
            {
                path: '/psycho-social-support',
                element: <Psycho_Social_Support />
            },
            {
                path: '/advocacy',
                element: <Advocacy />
            },
            {
                path: '/consultancy',
                element: <Consultancy />
            },
            {
                path: '/capacity',
                element: <Capacity />
            }
        ]
    },
]);