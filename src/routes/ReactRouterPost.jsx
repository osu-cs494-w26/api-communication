import { Form, useActionData, useNavigation } from 'react-router'

const userId = 1234

export async function action({ request }) {
    const formData = await request.formData()
    console.log("== formData:", formData)
    const postBody = Object.fromEntries(formData)
    console.log("== postBody:", postBody)
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: { "Content-Type": "application/json" }
    })
}

export default function Post() {
    const res = useActionData()
    console.log("== res:", res)

    const { state, formData } = useNavigation()
    console.log("== state:", state)

    return (
        <>
            <h1>HTTP POST with React Router Actions</h1>
            <Form method="POST">
                <input type="hidden" name="userId" value={userId} />
                <div>
                    <input placeholder="Title" name="title" />
                </div>
                <div>
                    <textarea placeholder="Body" name="body" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </Form>
        </>
    )
}
