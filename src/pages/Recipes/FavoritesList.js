import React from 'react'
import { UserAuth } from '../../context/AuthContext'

export default function FavoritesList() {
    const { authenticated } = UserAuth()

    return (
        <>
            {authenticated ? (
                <div>FavoritesList</div>
            ) : <p>Log in to store your favorite recipes!</p>
            }
        </>

    )
}
