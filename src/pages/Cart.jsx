import { cartItems } from '../constants/cart'
import CheckoutModal from '../components/CheckoutModal'
import { useState } from 'react'
const Cart = () => {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className='p-10'>
      <h1 className='text-xl'>Total Items</h1>
      <div className='mt-10 flex flex-col gap-8  '>
        {
          cartItems.map((item, index) => (
            <div key={index} className={`flex items-center cursor-pointer hover:bg-black/5 p-2 justify-between rounded-xl ${index % 2 === 0 ? "" : "bg-black/5"}`}>
              <div className='flex items-center gap-4'>
                <img src={item.photoUrl} alt="" className='w-20 h-20 rounded-xl' />
                <p className='font-bold'>{item.name}</p>
              </div>
              <div className=' flex items-center gap-4'>
                <p>{item.size}</p>
                <div className='flex gap-2 items-center'>
                  variant
                  <p
                    className='w-4 h-4 rounded-full'
                    style={{
                      backgroundColor: item.variant
                    }} />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='p-1 px-2 cursor-pointer bg-black/5 rounded-md'>+</p>
                  <p>{item.quantity}</p>
                  <p className='p-1 px-2 cursor-pointer bg-black/5 rounded-md'>-</p>
                </div>
                <p>{item.price}$</p>
                <p>total price {item.price * item.quantity}$</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex justify-between mt-10 text-xl bg-primary/80 text-white p-10'>
        <p className='font-bold'>Grand Total</p>
        <p>2999$</p>
      </div>
      <div className=' flex justify-end mt-10 text-xl'>
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