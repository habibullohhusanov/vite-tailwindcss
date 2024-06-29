import { useState } from "react";
import Button from "./button";

function Input({ type, label, ...props }) {
  const [typeThis, setTypeThis] = useState(true);
  return (
    <div className="mx-auto">
      <label htmlFor="" className="text-xl">{label}</label>
      <input type={type == "password" ? typeThis ? "password" : "text" : type} className="block outline-none w-full h-14 bg-[rgba(255,255,255,0.07)] border border-[#2e2121d3] rounded-xl mx-auto mb-6 mt-2 px-4 text-xl text-white placeholder:text-[#e5e5e5]" {...props} />
      {type == "password"
        ? <Button onClick={() => setTypeThis(!typeThis)}>Change</Button>
        : null
      }
    </div>
  )
}

export default Input