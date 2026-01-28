import { useParams } from 'react-router'

export default function FetchGet() {
    const { org } = useParams()

    return (
        <>
            <h1>HTTP GET with fetch()</h1>
            <h2>GitHub Repos for {org}</h2>
            <main>
                {/* Render repos here... */}
            </main>
        </>
    )
}
