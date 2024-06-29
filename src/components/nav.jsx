import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Button from "./UI/button"
import { useState } from "react";

function Nav() {
    const navigate = useNavigate();
    const  [open, setOpen] = useState(false);
    const routes = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ]
    return (
        <div className="*:box-border *:p-0 *:m-0 font-mono select-none">
            <header className="width-full overflow-hidden bg-blue-600">
                <nav className="md:container md:flex max-w-9/12 mx-auto justify-between md:p-5">
                    <div>
                        <h1 className="text-white font-bold text-3xl py-2 px-4 my-1 mx-4">DEBT</h1>
                    </div>
                    <div onClick={() => setOpen(!open)} className="text-4xl text-white md:hidden cursor-pointer absolute right-6 top-4">
                        <ion-icon name={open ? "close-outline" : "menu-outline"} ></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center text-white pb-8 md:pb-0 md:static absolute bg-blue-600 top-0 w-3/5 md:w-auto h-dvh md:h-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        {routes.map(route => {
                            return (
                                <li key={route.link} className="my-3 md:my-0"><NavLink className="md:border md:border-blue-600 md:rounded-full cursor-pointer py-2 px-10 md:py-2 md:px-4 md:my-0 md:mx-4 md:text-xs lg:text-base md:shadow-md md:shadow-blue-700 hover:shadow-blue-900 md:border-t-blue-200 md:border-s-blue-200 hover:border-t-white hover:border-s-white duration-300 md:active:bg-white" to={route.link}>{route.name}</NavLink></li>
                            )
                        })}
                        <Button onClick={() => navigate("/login")} className="border-2 border-white rounded-full cursor-pointer py-3 px-6 mx-5 text-xs lg:text-base shadow-md shadow-blue-700 hover:shadow-blue-900 hover:border-blue-700 duration-300">Get started</Button>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Nav