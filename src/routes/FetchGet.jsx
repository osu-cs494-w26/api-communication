import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

export default function FetchGet() {
    const { org } = useParams()
    const [ repos, setRepos ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        async function fetchOrgRepos() {
            setLoading(true)
            try {
                const res = await fetch(
                    `https://api.github.com/orgs/${org}/repos`,
                    { signal: controller.signal }
                )
                // if (res.status !== 200) {
                //     setError()
                // }
                const resBody = await res.json()
                console.log("== resBody:", resBody)
                setLoading(false)
                setError(null)
                setRepos(resBody || [])
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("HTTP request was cancelled")
                } else {
                    console.error(err)
                    setError(err)
                }
            }
        }

        if (org) {
            fetchOrgRepos()
        }

        return () => controller.abort()
    }, [ org ])

    return (
        <>
            <h2>GitHub Repos for {org}</h2>
            <main>
                {loading && <Spinner />}
                {error && <ErrorContainer>{error.message}</ErrorContainer>}
                <ul>
                    {repos.map(repo => (
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
