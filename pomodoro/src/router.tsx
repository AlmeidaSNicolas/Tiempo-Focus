import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import { AboutPomodoro } from "./Pages/AboutPomodoro";
import { NotFound } from "./Pages/NotFound";
import { History } from "./Pages/History";


export const router = createBrowserRouter([
    {
        path: '/',
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: 'AboutPomodoro',
                element: < AboutPomodoro />
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: 'History',
                element: <History />
            }
        ]
    }
]) 