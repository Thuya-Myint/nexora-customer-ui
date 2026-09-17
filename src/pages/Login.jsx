import { FaGoogle } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6"
import { LuMousePointerClick } from "react-icons/lu"
import logo from '../assets/logo/logo.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const loginContent = {
    title: "Welcome Back to nexora!",
    btnText: "Login",
    ques: "New User",
    actionText: "Create an account"

  }
  const singUpContent = {
    title: "Welcome From nexora!",
    btnText: "Sign Up",
    ques: "Existing User",
    actionText: "Login to account"

  }

  // const card = () => <div>
  //   <h1>card</h1>
  // </div>

  const submitForm = () => {
    navigate("/")
  }
  //
  // const en = {
  //   title: "Welcome Back to nexora!",
  //   btnText: "Login"

  // }
  // const mm = {
  //   title: "Welcome From nexora!",
  //   btnText: "Sign Up"

  // }
  // const jp = {
  //   title: "Welcome Back to nexora!",
  //   btnText: "Login"

  // }
  // const ch = {
  //   title: "Welcome From nexora!",
  //   btnText: "Sign Up"

  // }

  // const dropDown = ["en", "mm", "jp", "ch"]

  // const selectedLocale = "en"

  // const localizations = [en, mm, jp, ch]

  // const lang = localizations[selectedLocale]



  const content = isLogin ? loginContent : singUpContent

  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={submitForm} className="p-10 w-fit flex flex-col gap-4 items-center shadow-xl shadow-black/10   rounded-2xl">
        <div className="flex flex-col items-center gap-2 mb-10">
          <img src={logo} alt="" className="w-30 h-20" />
          <p>Nexora</p>

        </div>
        <h1 className="w-full">{content["title"]}</h1>
        <div className="flex gap-4">
          <input type="text" className="border-2 border-slate-100 rounded-xl p-2 " placeholder="Name" />
          <input type="password" className="border-2 border-slate-100 rounded-xl p-2 " placeholder="Password" />
        </div>
        {
          isLogin ?
            "" :
            <div className="flex flex-col w-full gap-4">
              <input type="email" className="border-2 border-slate-100 rounded-xl p-2 " placeholder="Email" />
              <input type="tel" className="border-2 border-slate-100 rounded-xl p-2 " placeholder="Phone" />
            </div>
        }
        <div className="flex justify-between w-full">
          <div className=" w-fit flex items-center gap-2  cursor-pointer">
            <div className="border-2 rounded-xl border-primary p-2">
              <FaGoogle className="text-green-400" />
            </div>
            <p className="text-md flex gap-1">
              <span className="text-yellow-300">Continue</span>
              <span className="text-blue-400">with</span>
              <span className="text-red-400">google</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>{content["btnText"]}</p>
            <button className="border-2 w-fit p-2 border-primary bg-primary text-white rounded-xl cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{content["ques"]}</p>
          <div className="flex items-center opacity-55 cursor-pointer underline" onClick={() => setIsLogin(!isLogin)}>
            {content["actionText"]}
            <LuMousePointerClick className="text-primary text-2xl" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login