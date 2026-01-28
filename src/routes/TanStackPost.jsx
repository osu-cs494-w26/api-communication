import { useState } from 'react'

const userId = 1234

export default function TanStackPost() {
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    return (
        <>
            <h1>HTTP POST with TanStack Query</h1>
            <form onSubmit={e => {
                e.preventDefault()
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
