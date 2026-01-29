import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

export default function GetRoot(props) {
    const [ org, setOrg ] = useState("")
    const navigate = useNavigate()
    return (
        <>
            <h1>HTTP GET with {props.framework}</h1>
            <form onSubmit={e => {
                e.preventDefault()
                navigate(org)
            }}>
                <input placeholder="GitHub Org" value={org} onChange={e => setOrg(e.target.value)} />
                <button>Submit</button>
            </form>
            < Outlet />
        </>
    )
}
