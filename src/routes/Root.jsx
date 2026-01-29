import { NavLink, Outlet } from 'react-router'

export default function Root() {
    return (
        <div className="page-container">
            <nav>
                <ul>
                    <li><NavLink to="/fetch/get">GET with fetch()</NavLink></li>
                    <li><NavLink to="/fetch/post">POST with fetch()</NavLink></li>
                    <li><NavLink to="/tanstack/get">GET with TanStack Query</NavLink></li>
                    <li><NavLink to="/tanstack/post">POST with TanStack Query</NavLink></li>
                    <li><NavLink to="/react-router/get">GET with React Router</NavLink></li>
                    <li><NavLink to="/react-router/post">POST with React Router</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
        </div>
    )
}
