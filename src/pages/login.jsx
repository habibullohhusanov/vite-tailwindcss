import { NavLink } from "react-router-dom";
import Button from "../components/UI/button"
import Input from "../components/UI/input"

function Login() {
  const login = (e) => {
    e.preventDefault();

  }
  return (
    <div className="*:outline-none *:box-border *:p-0 *:m-0 font-serif select-none">
      <div className="size-64 bg-gradient-to-tr from-[#4141e2] to-[#8a66d6] blur-[0.5px] rounded-full absolute top-[67%] left-[55%]"></div>
      <div className="flex w-full items-center h-screen bg-[#080710]">
        <form onSubmit={login} className="min-w-[480px] py-9 px-12 m-auto block text-white bg-[rgba(255,255,255,0.13)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.13)] rounded-xl shadow-lg shadow-[rgba(8,7,16,0.6)] z-1 before:content-[''] before:size-44 before:bg-gradient-to-tr before:from-[#8a66d6] before:to-[#4141e2] before:-ml-[140px] before:-mt-[100px] before:blur-[0.5px] before:rounded-full before:absolute" >
          <h1 className="text-center my-8 text-white text-4xl font-bold">Sign up</h1>
          <Input type="text" label="Email" placeholder="Enter email" />
          <Input type="password" label="Password" placeholder="Enter password" />
          <Input type="password" label="Password confirmation" placeholder="Re enter password" />
            <NavLink className="text-blue-700 underline" to="/">Back to home</NavLink>
          <Button className="w-full mx-auto mb-8 mt-4 py-4 px-11 bg-white border-2 rounded-xl border-white cursor-pointer text-black text-xl font-bold hover:border-black">Sign up</Button>
        </form>
      </div>
    </div>
  )
}

export default Login