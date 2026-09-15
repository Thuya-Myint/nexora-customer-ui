import { FaStar, FaUserCircle } from "react-icons/fa"
import { RxCaretRight } from "react-icons/rx"
import ProductCard from "../components/ProductCard"
import { popularItems } from "../constants/products"
import { useRef } from "react"
const User = () => {

  const userInfoRef = useRef(null)
  const deliverRef = useRef(null)

  const focusOnRef = (ref) => ref.current?.focus()

  return (
    <div className=" p-10 pl-20 ">
      <div className="flex justify-center ">
        <h1 className="text-xl flex items-center gap-4">
          <FaUserCircle className="text-3xl" />
          User Information</h1>
      </div>
      <div className="mt-20 flex gap-10 ">
        <div className="p-6 bg-black/5  rounded-xl flex flex-col gap-8 h-fit w-120">
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center ">
              <RxCaretRight className="text-3xl" />
              Account Management
            </h1>
            <p className="pl-8 cursor-pointer" onClick={() => focusOnRef(userInfoRef)}>Username & Password</p>
            <p className="pl-8 cursor-pointer" onClick={() => focusOnRef(deliverRef)} >Delivery Information</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center">
              <RxCaretRight className="text-3xl" />
              Shopping Preferences
            </h1>
            <p className="pl-8">Your Favourites</p>
          </div>
        </div>
        <div className="flex flex-col  w-full pl-20  gap-8">
          <div className="flex flex-col gap-4  min-w-70 max-w-100">
            <div className="font-bold">Username & Password</div>
            <input ref={userInfoRef} type="text" placeholder="username" className="p-2 rounded-md border-slate-100 border-2  w-full" />
            <input type="password" placeholder="password" className="p-2 rounded-md border-slate-100 border-2 w-full" />
            <div className="flex justify-end">
              <button className="w-fit p-2 bg-primary text-white rounded-md">Update</button>
            </div>
          </div>
          <div className="flex flex-col  gap-4 min-w-70 max-w-100">
            <div className="font-bold">Delivery Information</div>
            <input ref={deliverRef} type="text" placeholder="address" className="p-2 rounded-md border-slate-100 border-2 w-full" />
            <input type="tel" placeholder="phone number" className="p-2 rounded-md border-slate-100 border-2 w-full" />
            <textarea name="" id="" placeholder="delivery instruction" className="p-2 rounded-md border-slate-100 border-2 w-full">

            </textarea>
            <div className="flex justify-end">
              <button className="w-fit p-2 bg-primary text-white rounded-md">Update</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-bold flex items-center gap-2">
          Your Favourites
          <FaStar className="text-primary" />
        </h1>
        <ProductCard
          header={""}
          data={popularItems}
        />
      </div>
    </div>
  )
}

export default User