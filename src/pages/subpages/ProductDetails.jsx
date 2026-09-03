import { FaUserCircle } from "react-icons/fa"
import { IoMdArrowBack, IoMdCart } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"

const ProductDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedProduct = location.state?.item



  return (
    <div>
      <div className="flex items-center p-4 py-10 justify-between">
        <div className="flex gap-4 items-center  ">
          <div className="bg-black/10 p-1 rounded-full text-2xl cursor-pointer" onClick={() => navigate("/product")}>
            <IoMdArrowBack />
          </div>
          <p className="p-1 px-4 rounded-full text-white bg-primary">{`${selectedProduct.name} ${selectedProduct.id}`}</p>
        </div>
        <div className=" flex gap-4 items-center">
          <div className="flex gap-1">
            <IoMdCart className="text-2xl" />
            <p className="text-red-400">0</p>
          </div>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails