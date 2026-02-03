import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

const userId = 1234

export default function TanStackPost() {
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")

    const mutation = useMutation({
        mutationFn: newPost => fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                body: JSON.stringify(newPost),
                headers: { "Content-Type": "application/json" }
            }
        )
    })

    return (
        <>
            <h1>HTTP POST with TanStack Query</h1>
            <form onSubmit={e => {
                e.preventDefault()
                if (title && body && userId) {
                    /*
                        {
                            title: title,
                            body: body,
                            userId: userId
                        }
                     */
                    mutation.mutate({ title, body, userId })
                }
            }}>
                <div>
                    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <div>
                    <button>Submit</button>
                    {mutation.isPending && <Spinner />}
                    {mutation.isSuccess && <span>Blog post successfully submitted!</span>}
                    {mutation.isError && <ErrorContainer>{mutation.error.message}</ErrorContainer>}
                </div>
            </form>
        </>
    )
}
