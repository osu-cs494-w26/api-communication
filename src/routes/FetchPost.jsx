import { useState } from 'react'

const userId = 1234

export default function FetchPost() {
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")

    async function sendPost() {
        if (userId && title && body) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: userId
                    }),
                    headers: { "Content-Type": "application/json" }
                }
            )
            const resBody = await res.json()
            console.log("== resBody:", resBody)
        }
    }

    return (
        <>
            <h1>HTTP POST with fetch()</h1>
            <form onSubmit={e => {
                e.preventDefault()
                sendPost()
            }}>
                <div>
                    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}
