import { useEffect, useMemo, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { IoMdArrowBack, IoMdCart } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addToCart } from '../../features/cart/cartSlice'
const ProductDetailsM = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const selectedProduct = location.state?.item
  const prevLink = location.state?.prevLink ?? ""


  const [selectedOptions, setSelectedOptions] = useState(
    selectedProduct.skus[0]?.options ?? {}
  )
  const selectedSku = useMemo(() => {
    return selectedProduct.skus.find((sku) =>
      Object.entries(selectedOptions).every(
        ([key, value]) => sku.options[key] === value
      ))
  }, [selectedProduct.skus, selectedOptions])

  const [quantity, setQuantity] = useState(1)


  useEffect(() => {
    console.log("cart--item", cartItems)
  }, [cartItems])
  const currentPrice = selectedSku?.price.sale ?? selectedSku?.price.base ?? null

  const selectedProductInCart = cartItems.find((item) => item?.skuId === selectedSku?.id)
  const currentProductQty = selectedProductInCart?.quantity || 0
  // useEffect(() => {
  //   console.log("selectedProductInCart", selectedProductInCart, "currentProductQty", currentProductQty)
  // }, [quantity])
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const canAddToCart = Boolean(selectedSku) && selectedSku.stock > 0;
  const stockAvailable = currentProductQty < selectedProductInCart?.stock;

  const handleAddToCart = () => {
    if (!canAddToCart) return

    dispatch(addToCart({
      id: crypto.randomUUID(),
      skuId: selectedSku.id,
      name: selectedProduct.name,
      image: selectedProduct.images[0],
      options: selectedSku.options,
      unitPrice: currentPrice,
      stock: selectedSku.stock,
      quantity: quantity,
    }))
  }
  return (
    <div>
      <div className="flex items-center p-4 py-10 justify-between">
        <div className="flex gap-4 items-center  ">
          <div className="bg-black/10 p-1 rounded-full text-2xl cursor-pointer" onClick={() => navigate(prevLink)}>
            <IoMdArrowBack />
          </div>
          <p className="p-1 px-4 rounded-full text-white bg-primary">{`${selectedProduct?.name} ${selectedProduct?.id}`}</p>
        </div>
        <div className=" flex gap-4 items-center">
          <div className="flex gap-1">
            <IoMdCart className="text-2xl" />
            <p className="text-red-400">{totalCartItems}</p>
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
          current qty{currentProductQty}
        </div>
        <div className=" flex w-3/7 flex-col  ">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">{selectedProduct.name}</h1>
            <p>{selectedProduct?.description}</p>
            <div>
              {
                Object.entries(selectedProduct.options).map(
                  ([optionName, values]) => (
                    <div key={optionName} className="mb-2">
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
            <div>

              <div className=" flex gap-4 items-end">
                {
                  selectedSku ?
                    <div className="Capitalize text-xl">
                      Price
                    </div> : ""
                }
                <div>
                  {
                    selectedSku ?
                      selectedSku?.price?.sale ?
                        <div className='relative w-fit'>
                          <p className='absolute -top-3 right-0  text-xs line-through opacity-50'>{selectedSku?.price?.base}</p>
                          <p className=''>${selectedSku?.price?.sale}</p>
                        </div>
                        :
                        <div>
                          <p className=''>${selectedSku?.price?.base}</p>
                        </div> : ""
                  }

                </div>
              </div>
              {
                selectedSku?.stock === 0 ?
                  <div className=" text-red-500">
                    out of stock
                  </div>
                  :
                  selectedSku?.stock <= 5 &&
                  <div className="flex gap-1">
                    only <p className="text-red-500">{selectedSku?.stock}</p> in stock!
                  </div>


              }


            </div>

          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-xl">Quantity</div>

            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-6 h-6 flex justify-center items-center border-2 border-primary bg-primary cursor-pointer text-white rounded-full"
                onClick={() => setQuantity((prev) => prev + 1)}
                disabled={quantity === selectedSku?.stock}
              >
                +
              </button>
              <div>{quantity}</div>
              <button
                className="w-6 h-6 flex justify-center items-center bg-white text-black border-2 border-primary cursor-pointer rounded-full"
                onClick={() => setQuantity((prev) => prev - 1)}
                disabled={quantity === 1}

              >
                -
              </button>
            </div>
          </div>
          {
            canAddToCart ?
              <button
                className="bg-primary active:opacity-70 text-white w-full p-2 rounded-xl cursor-pointer mt-4"
                onClick={handleAddToCart}
              >Add to Cart
              </button>
              :
              <div className="text-red-500">selected unit is not available!</div>
          }

        </div>
      </div>
    </div>
  )
}

export default ProductDetailsM