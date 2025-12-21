import React from 'react'
import { Link } from 'react-router'

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <p>Already have an account? <Link className="text-blue-800" to="/login">Log in</Link></p>
        </div>
    )
}
