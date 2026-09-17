import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { IoMdArrowBack, IoMdCart } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"

const ProductDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedProduct = location.state?.item
  const prevLink = location.state?.prevLink ?? ""
  const [selectedSize, setSelectedSize] = useState(selectedProduct && selectedProduct?.sizes[0])
  const [selectedVariant, setSelectedVariant] = useState(selectedProduct && selectedProduct?.variants[0])



  return (
    <div>
      <div className="flex items-center p-4 py-10 justify-between">
        <div className="flex gap-4 items-center  ">
          <div className="bg-black/10 p-1 rounded-full text-2xl cursor-pointer" onClick={() => navigate(prevLink)}>
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
      <div className="flex gap-10 w-full justify-center">
        <div className=" gap-4 p-10 w-1/3">
          <img src={selectedProduct.photoUrl[0]} className=" rounded-xl" alt="" />
          <div className="flex mt-4  gap-4  overflow-auto">
            {
              selectedProduct?.photoUrl.map((item, index) => (
                <img key={index} src={item} alt="" className="w-25 h-20 rounded-xl" />
              ))
            }
          </div>
        </div>
        <div className=" flex w-3/7 flex-col  justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">{selectedProduct.name}</h1>
            <p>{selectedProduct?.details}</p>
            <div className="flex  gap-4 items-center">
              <p>Sizes</p>
              {
                selectedProduct?.sizes.map((item, index) => (
                  <p key={index} className={`${selectedSize === item ? "bg-primary text-white" : "bg-slate-100 "} p-2 rounded-lg cursor-pointer`}
                    onClick={() => setSelectedSize(item)}
                  >
                    {item}
                  </p>
                ))
              }
            </div>
            <div className="flex gap-4 items-center">
              <p>Variants</p>
              {
                selectedProduct?.variants.map((item, index) => (
                  <div className={` border-2 p-0.5 ${item === selectedVariant ? " border-primary/40  rounded-full" : "border-black/0"}`}>
                    <p key={index}
                      className={`w-6 h-6 rounded-full cursor-pointer shadow-black/30 shadow-lg`}
                      style={{
                        backgroundColor: item
                      }}
                      onClick={() => setSelectedVariant(item)}
                    >

                    </p>
                  </div>
                ))
              }
            </div>
            <div className="flex items-center gap-4">
              <p>Price</p>
              <p className="font-bold">${selectedProduct.price}</p>
            </div>
          </div>

          <button className="bg-primary text-white w-full p-2 rounded-xl cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails