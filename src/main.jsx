import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Root from './routes/Root'
import GetRoot from './routes/GetRoot'
import FetchGet from './routes/FetchGet'
import FetchPost from './routes/FetchPost'
import TanStackGet from './routes/TanStackGet'
import TanStackPost from './routes/TanStackPost'
import ReactRouterGet from './routes/ReactRouterGet'
import ReactRouterPost from './routes/ReactRouterPost'

import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "fetch",
                children: [
                    {
                        path: "get",
                        element: <GetRoot framework="fetch()" />,
                        children: [
                            { path: ":org", Component: FetchGet }
                        ]
                    },
                    { path: "post", Component: FetchPost }
                ]
            },
            {
                path: "tanstack",
                children: [
                    {
                        path: "get",
                        element: <GetRoot framework="TanStack Query" />,
                        children: [
                            { path: ":org", Component: TanStackGet }
                        ]
                    },
                    { path: "post", Component: TanStackPost }
                ]
            },
            {
                path: "react-router",
                children: [
                    {
                        path: "get",
                        element: <GetRoot framework="React Router loaders" />,
                        children: [
                            { path: ":org", Component: ReactRouterGet }
                        ]
                    },
                    { path: "post", Component: ReactRouterPost }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
)
