import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="bg-center bg-cover bg no-repeat bg-no-repeat bg-fixed
        font-hedvig text-white bg-background-image flex flex-col min-h-svh">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}