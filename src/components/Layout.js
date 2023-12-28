import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="font-hedvig text-gray-800 flex flex-col min-h-svh">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}