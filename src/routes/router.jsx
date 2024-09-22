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
import UnderDev from "../component/underDev/UnderDev";
import Impact from "../pages/Impact/Impact";
import Support__Group_Meeting from "../pages/Support_Group_Meeting/Support__Group_Meeting";
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
                path: "/acknowledgment-impact",
                element: <Impact />
            },
            {
                path: "/contact",
                element: <UnderDev />
            },

            // services
            {
                path: '/psycho-social-support',
                element: <Psycho_Social_Support />
            },
            {
                path: '/support-group-metting',
                element: <Support__Group_Meeting />
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