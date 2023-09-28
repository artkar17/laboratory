import React from "react"
import { useRoutes,Outlet } from "react-router-dom"
import NotFound from "./NotFound";
import Home from "./Home";
import Users from "./Users";
import User from "./User";

export default function Routes() {

    const routes = useRoutes ([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'users',
            element:<>
            <Outlet/>
            </>,
            children:[
                {
                path:'',
                element:<Users/>,
                },
                {
                    path:':id',
                    element: <User/>
                }
            ]
        },
        {
            path:'about',
            element:<>about</>
        },
        {
            path:'contact',
            element:<>contact</>
        },
        {
            path:'*',
            element:<NotFound/>
        },

    ])
    return routes;
}