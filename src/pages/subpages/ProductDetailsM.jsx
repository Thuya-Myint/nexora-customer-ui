import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { IoMdArrowBack, IoMdCart } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"
const ProductDetailsM = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedProduct = location.state?.item
  const prevLink = location.state?.prevLink ?? ""

  const [selectedOptions, setSelectedOptions] = useState(
    selectedProduct.skus[0]?.options ?? {}
  )
  //{
  //color:white
  // storage:128gb
  //}
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
          <img src={selectedProduct.images[0]} className=" rounded-xl" alt="" />
          <div className="flex mt-4  gap-4  overflow-auto">
            {
              selectedProduct?.images.map((item, index) => (
                <img key={index} src={item} alt="" className="w-25 h-20 rounded-xl" />
              ))
            }
          </div>
        </div>
        <div className=" flex w-3/7 flex-col  justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl">{selectedProduct.name}</h1>
            <p>{selectedProduct?.description}</p>
            <div>
              {
                Object.entries(selectedProduct.options).map(
                  ([optionName, values]) => (
                    <div className="mt-4">
                      <h1 className="capitalize text-xl mb-2">
                        {/* loop - 1
                        OptionName = color //object key

                        values=[
                                {
                                    id: "white",
                                    name: "White"
                                  },
                                  {
                                    id: "black",
                                    name: "Black"
                                  }
                                ]
                         */}
                        {optionName}</h1>
                      <div className="flex gap-2">

                        {
                          values.map((option, index) => {
                            // loop - 1
                            //option =
                            //{
                            // id: "white",
                            // name: "White"
                            //}

                            const selected = selectedOptions[optionName] === option.id

                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  setSelectedOptions((prev) => (
                                    {
                                      ...prev,//color:white(unchanged)
                                      [optionName]: option.id//storage:256gb
                                    }
                                  ))
                                }}
                                className={`
                                  bg-black/10 p-2 rounded-lg cursor-pointer
                                  ${selected ? "bg-primary text-white" : ""}
                                  `}>
                                {option.name}
                              </button>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                )
              }
            </div>

          </div>

          <button className="bg-primary text-white w-full p-2 rounded-xl cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsM