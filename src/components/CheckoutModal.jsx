import { IoMdClose } from "react-icons/io"

const CheckoutModal = (props) => {
  const { isShow, setIsShow } = { ...props }
  return (
    <div className={` w-screen h-screen fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-xs ${isShow ? "block" :
      "hidden"
      }`}
      onClick={() => setIsShow(false)}
    >
      <div className="bg-white relative shadow-xl shadow-black/5 p-6 rounded-xl" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-xl">Checkout Your Item</h1>
        <div>
          <p className="text-md mt-4">Enter Your Card Information</p>
        </div>
        <div>
          <p className="text-md text-black/20 mt-4">Card Number</p>
          <input type="text" placeholder="1234 8756 9087 2811" className="border-2 border-black/5 p-2 rounded-xl w-full" />
        </div>
        <div className="flex gap-2 mt-4">
          <div>
            <p className="text-md text-black/20">Security Code</p>
            <input type="text" placeholder="123" className="border-2 border-black/5 p-2 rounded-xl" />
          </div>
          <div>
            <p className="text-md text-black/20">Valid Date</p>
            <input type="text" placeholder="MM/DD" className="border-2 border-black/5 p-2 rounded-xl" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-md text-black/20">Name on Card</p>
          <input type="text" placeholder="John" className="border-2 border-black/5 p-2 rounded-xl w-full" />
        </div>
        <div className="flex justify-end">
          <button className="p-2 bg-primary text-white mt-4 rounded-xl cursor-pointer">Checkout </button>
        </div>
        <div className="text-3xl absolute top-5 right-5 cursor-pointer text-black/40" onClick={() => setIsShow(false)}>
          <IoMdClose />
        </div>
      </div>
    </div>
  )
}

export default CheckoutModal