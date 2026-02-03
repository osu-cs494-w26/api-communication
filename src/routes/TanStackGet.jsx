import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

export default function TanStackGet() {
    const { org } = useParams()

    const { isLoading, error, data, fetchStatus } = useQuery({
        queryKey: [ "orgRepos", org ],
        queryFn: async () => {
            console.log("== Running query function...")
            // throw new Error("Woops!")
            const res = await fetch(
                `https://api.github.com/orgs/${org}/repos`
            )
            return res.json()
        }
    })

    console.log("== fetchStatus:", fetchStatus)

    return (
        <>
            <h2>GitHub Repos for {org}</h2>
            <main>
                {isLoading && <Spinner />}
                {error && <ErrorContainer>{error.message}</ErrorContainer>}
                <ul>
                    {data && data.map(repo => (
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
