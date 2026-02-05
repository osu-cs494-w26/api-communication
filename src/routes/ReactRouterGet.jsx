import { useParams, useLoaderData, useNavigation } from 'react-router'

export function loader({ params, request }) {
    console.log("== loader is running")
    return fetch(`https://api.github.com/orgs/${params.org}/repos`)
}

export default function FetchGet() {
    const { org } = useParams()
    const repos = useLoaderData()
    const { state } = useNavigation()

    console.log("== navigation state:", state)

    return (
        <>
            <h2>GitHub Repos for {org}</h2>
            <main>
                <ul>
                    {repos && repos.map(repo => (
                        <li key={repo.id}>
                            <a href={repo.html_url}>
                                {repo.full_name}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
