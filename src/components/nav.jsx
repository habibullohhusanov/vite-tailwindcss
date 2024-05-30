import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Button from "./UI/button"

function Nav() {
    const navigate = useNavigate();
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
        <div className="box-border p-0 m-0 font-mono select-none">
            <header className="width-full overflow-hidden bg-blue-600">
                <nav className="container flex max-w-9/12 mx-auto justify-between p-5">
                    <div>
                        <h1 className="text-white font-bold text-3xl py-2 px-4 my-1 mx-4">DEBT</h1>
                    </div>
                    <ul className="flex items-center text-white">
                        {routes.map(route => {
                            return (
                                <li key={route.link}><NavLink  className="border border-blue-600 rounded-full cursor-pointer py-2 px-4 mx-4 shadow-md shadow-blue-700 hover:shadow-blue-900 border-t-blue-200 border-s-blue-200 hover:border-t-white hover:border-s-white duration-300 active:bg-white" to={route.link}>{route.name}</NavLink></li>
                            )
                        })}
                        <Button onClick={() => navigate("/login")} className="border-2 border-white rounded-full cursor-pointer py-3 px-6 mx-5 shadow-md shadow-blue-700 hover:shadow-blue-900 hover:border-blue-700 duration-300">Get started</Button>
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