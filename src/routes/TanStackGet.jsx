import { useParams } from 'react-router'

export default function TanStackGet() {
    const { org } = useParams()

    return (
        <>
            <h2>GitHub Repos for {org}</h2>
            <main>
                {/* Render repos here... */}
            </main>
        </>
    )
}
