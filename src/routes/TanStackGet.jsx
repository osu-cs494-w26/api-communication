import { useParams } from 'react-router'

export default function TanStackGet() {
    const { org } = useParams()

    return (
        <>
            <h1>HTTP GET with TanStack Query</h1>
            <h2>GitHub Repos for {org}</h2>
            <main>
                {/* Render repos here... */}
            </main>
        </>
    )
}
