import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Nav from "./components/nav"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Login from "./pages/login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
