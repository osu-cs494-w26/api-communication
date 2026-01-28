import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import Root from './routes/Root'
import FetchGet from './routes/FetchGet'
import FetchPost from './routes/FetchPost'
import TanStackGet from './routes/TanStackGet'
import TanStackPost from './routes/TanStackPost'
import ReactRouterGet from './routes/ReactRouterGet'
import ReactRouterPost from './routes/ReactRouterPost'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { path: "fetch-get/:org", Component: FetchGet },
            { path: "fetch-post", Component: FetchPost },
            { path: "tanstack-get/:org", Component: TanStackGet },
            { path: "tanstack-post", Component: TanStackPost },
            { path: "react-router-get/:org", Component: ReactRouterGet },
            { path: "react-router-post", Component: ReactRouterPost },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
