import { IoFilter } from 'react-icons/io5'
import FilterModal from '../components/FilterModal'
import { useState } from 'react'
const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDiscoutSelected, setIsDiscountSelected] = useState(false)
  const toggleDiscount = () => setIsDiscountSelected(!isDiscoutSelected)
  return (
    <div>
      <div className='flex justify-end gap-2 p-4'>
        <div
          className='bg-primary border-2 border-primary cursor-pointer text-white rounded-xl flex gap-4 px-4 py-2 items-center'
          onClick={() => setIsModalOpen(true)}
        >
          <IoFilter />
          <p>Filter</p>
        </div>
      </div>

      <FilterModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isDiscoutSelected={isDiscoutSelected}
        setIsDiscountSelected={setIsDiscountSelected}
        toggleDiscount={toggleDiscount}
      />

    </div>
  )
}

export default Product