import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    return (
        <div>
            <h1>Signup</h1>
            <p>Already have an account? <Link className="text-blue-800" to="/login">Log in</Link></p>
        </div>
    )
}
