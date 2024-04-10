import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="bg-neutral-600 font-hedvig text-white
            flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}