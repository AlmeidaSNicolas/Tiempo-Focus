import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import { AboutPomodoro } from "./Pages/AboutPomodoro";
import { NotFound } from "./Pages/NotFound";
import { History } from "./Pages/History";
import { Settings } from "./Pages/Settings";


export const router = createBrowserRouter([
    {
        path: '/',
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: 'History',
                element: < History />
            },
            {
                path: 'Settings',
                element: <Settings />
            },
            {
                path: 'AboutPomodoro',
                element: <AboutPomodoro />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]) 