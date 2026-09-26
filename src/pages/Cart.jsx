import { useDispatch, useSelector } from 'react-redux'
import CheckoutModal from '../components/CheckoutModal'
import { useState } from 'react'
import { updateQuantity } from '../features/cart/cartSlice'
const Cart = () => {

  const [isShow, setIsShow] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const grandTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)

  const dispatch = useDispatch()

  const qtyOnChange = (id, currentQty, isIncreaseQty, stock) => {
    dispatch(updateQuantity({
      id: id,
      quantity: isIncreaseQty ? currentQty + 1 : currentQty - 1,
      stock: stock
    }))
  }

  return (

    <div className='p-10'>
      <h1 className='text-xl flex gap-2'>Total Items <p className='text-red-500'>{totalCartItems}</p></h1>
      <div className='grid grid-cols-6 bg-primary text-white p-2 text-center'>

        <p>image</p>
        <p>name</p>
        <p>variant</p>
        <p>unit price</p>
        <p>quantity</p>
        <p>total</p>
      </div>

      {
        cartItems.map((item, index) => (
          <div key={index} className='grid grid-cols-6 p-2 py-4 capitalize text-center' >

            <img src={item.image} alt="" className='w-14 h-10 m-auto' />
            <h1 className='m-auto'>{item.name}</h1>
            <div className='text-center'>
              {
                Object.entries(item.options).map(([key, value]) => (
                  <div key={key}>
                    {value}
                  </div>
                ))
              }
            </div>
            <p className='m-auto'>${item.unitPrice}</p>
            <div className='flex items-center justify-center gap-2'>
              <button
                className='w-4 h-4 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white'
                onClick={() => qtyOnChange(item.id, item.quantity, true, item.stock)}
              >+</button>
              <p>{item.quantity}</p>
              <button
                className='w-4 h-4 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white'
                onClick={() => qtyOnChange(item.id, item.quantity, false, item.stock)}>-</button>
            </div>
            <p className='m-auto'>${item.unitPrice * item.quantity}</p>
          </div>
        ))
      }

      <div className=' flex justify-end mt-10 text-xl items-center gap-4'>
        <p>${grandTotal}</p>
        <button className='border-2 rounded-lg border-primary px-2 p-1 hover:bg-primary cursor-pointer hover:text-white'
          onClick={() => setIsShow(!isShow)}
        >checkout</button>
      </div>
      <CheckoutModal
        isShow={isShow}
        setIsShow={setIsShow} />
    </div >
  )
}

export default Cart