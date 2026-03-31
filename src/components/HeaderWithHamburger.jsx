import { NavLink } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { Menu } from '@boxicons/react';
import { useState, useEffect, useRef } from "react";

export default function HeaderWithHamburger() {

    const { session, signOut } = UserAuth()
    const [isOpen, setIsOpen] = useState(false)

    let menuRef = useRef(null)

    useEffect(() => {
        function handler(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <header
            ref={menuRef}
            className="relative flex justify-end lg:justify-center items-center bg-opacity-50 bg-neutral-600
            text-white py-6 px-8 md:px-16 xl:px-32 text-center">
            <nav className="hidden lg:flex items-center gap-12
                    md:text-3xl">
                <NavLink
                    className="focus:underline"
                    to="/">Home
                </NavLink>
                <NavLink
                    to="/recipes"
                    className="focus:underline"
                >
                    Recipes
                </NavLink>
                <NavLink
                    to="/random"
                    className="focus:underline"
                >
                    Random Meal
                </NavLink>
                <NavLink
                    to="/favorites"
                    className="focus:underline"
                >
                    Favorites
                </NavLink>
                {!session && (<NavLink
                    to="/signup"
                    className="focus:underline"
                >
                    Sign Up/Log In
                </NavLink>
                )
                }
                {session && (<button
                    className="focus:underline"
                    onClick={signOut}
                >
                    Sign Out
                </button>
                )
                }
            </nav>

            <div
                onClick={() => setIsOpen(open => !open)}
                className="lg:hidden block cursor-pointer">
                <Menu />
            </div>

            <div className={`absolute xl:hidden top-full
                    left-0 w-full bg-neutral-900
                    flex-col items-center gap-6 font-semibold
                    transform transition-transform
                    ${isOpen ? "flex" : "hidden"}`}>
                <nav
                    className="w-full text-center
                        p-4 transition-all
                        cursor-pointer flex flex-col gap-y-6">
                    <NavLink
                        className="focus:underline"
                        to="/">Home
                    </NavLink>
                    <NavLink
                        to="/recipes"
                        className="focus:underline"
                    >
                        Recipes
                    </NavLink>
                    <NavLink
                        to="/random"
                        className="focus:underline"
                    >
                        Random Meal
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className="focus:underline"
                    >
                        Favorites
                    </NavLink>
                    {!session && (<NavLink
                        to="/signup"
                        className="focus:underline"
                    >
                        Sign Up/Log In
                    </NavLink>
                    )
                    }
                    {session && (<button
                        className="focus:underline"
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                    )
                    }
                </nav>
            </div>
        </header>
    )
}
