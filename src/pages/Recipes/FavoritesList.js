import React from 'react'
import { UserAuth } from '../../context/AuthContext'

export default function FavoritesList() {
    const { session } = UserAuth()

    return (
        <>
            {session ? (
                <div>FavoritesList</div>
            ) :
                <div className='flex justify-center items-center text-3xl flex-col'>
                    <p>Log in to store your favorite recipes!</p>
                </div>
            }
        </>

    )
}
