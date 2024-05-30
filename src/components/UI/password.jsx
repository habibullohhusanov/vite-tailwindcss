import { useState } from "react"
import Button from "./button";

function Password({ label, ...props }) {
    const { type, setType } = useState(true);
    console.log(type);
    return (
        <div>
            <label htmlFor="" className="block pl-10 text-xl">{label}</label>
            <input type={type ? "password" : "text"} className="block w-4/5 h-12 bg-[rgba(255,255,255,0.07)] border border-[#2e2121d3] rounded-xl m-4 px-2.5 text-base text-white placeholder:text-[#e5e5e5]" {...props} />
            <Button onClick={() => setType(!type)}>Change</Button>
        </div>
    )
}

export default Password