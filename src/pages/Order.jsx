import { orders } from '../constants/order'
const Order = () => {
  return (
    <div className="p-10">
      <div className="flex w-full justify-between mb-10">
        <h1 className="text-2xl">Your Orders</h1>
        <div className="flex items-center gap-4">
          <p className="text-black/50">Filter By Date</p>
          <input type="datetime-local" />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {
          orders.map((item, index) => (
            <div key={index} className=' bg-black/5 relative p-4 rounded-xl'>
              <div className='flex gap-10'>
                <img src={item.productImageUrl} alt="" className='w-25 h-20' />
                <div>
                  <p className='text-xl'>{item.productName}</p>
                  {/* <p className='flex items-center gap-4'>
                    <p>price</p>
                    {item.price}$</p> */}
                  <p className='flex items-center gap-4'>
                    <p>size</p>
                    {item.size}</p>
                  <div className='flex items-center gap-4'>variant
                    <div className='w-4 h-4 rounded-full '
                      style={{
                        backgroundColor: item.variant
                      }}
                    >

                    </div>
                  </div>
                </div>

              </div>
              <div className='flex items-center gap-2 justify-end mt-8'>
                <p>{item.price}$</p>
                {
                  item.isCompleted && item.status !== "pending" ?
                    "" :
                    <button className='bg-red-500 text-white px-2 py-1 rounded-lg cursor-pointer'>
                      cancel
                    </button>

                }
              </div>
              <p className='bg-black/10 rounded-full px-2 py-1 w-fit absolute top-4 right-4 text-sm'>{item.status}</p>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Order