import { Outlet } from "react-router"
import Footer from "./Footer"
import BackToTopButton from "./BackToTopButton"
import HeaderWithHamburger from "./HeaderWithHamburger"

export default function Layout() {
    return (
        <div className="bg-black font-hedvig text-white
            grid grid-rows-[auto_1fr_auto] grid-cols-1 w-full min-h-screen">
            <HeaderWithHamburger />
            {/* <Header /> */}
            <Outlet />
            <BackToTopButton />
            <Footer />
        </div>
    )
}