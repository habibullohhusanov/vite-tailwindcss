import Button from "../components/UI/button"
import Input from "../components/UI/input"
import Password from "../components/UI/password";

function Login() {
  const login = (e) => {
    e.preventDefault();

  }
  return (
    <div className="*:outline-none *:box-border *:p-0 *:m-0">
      <div className="flex w-full h-screen bg-[#080710] content-center items-center">
        <form onSubmit={login} className="w-1/4 p-9 block text-white bg-[rgba(255,255,255,0.13)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.13)] rounded-xl shadow-lg shadow-[rgba(8,7,16,0.6)] z-1 before:content-[''] before:w-64 before:h-64 before:bg=[linear-gradient(#4141e2, #8a66d6)]" >
          <Input type="text" label="Email" placeholder="Enter email" />
          <Input type="password" label="Password" placeholder="Enter password" />
          <Password label="Password" placeholder="Enter password" />
          <Button>Log in</Button>
        </form>
      </div>
    </div>
  )
}

export default Login