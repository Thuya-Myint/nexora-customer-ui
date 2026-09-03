import { IoFilter, IoReloadCircle } from 'react-icons/io5'
import FilterModal from '../components/FilterModal'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../constants/products'
const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isDiscoutSelected, setIsDiscountSelected] = useState(searchParams.get("type") === "saleItems" ? true : false)
  const [haveConditions, setHaveConditions] = useState(searchParams.size > 0 ? true : false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") ?? null)

  const toggleDiscount = () => setIsDiscountSelected(!isDiscoutSelected)

  useEffect(() => {
    if (searchParams.size <= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDiscountSelected(false)
      setHaveConditions(false)
      return
    }
  }, [searchParams])

  const resetFilter = () => {
    navigate("/product")
    setHaveConditions(false)
    setSelectedCategory(null)
    isDiscoutSelected(false)
    setSearchParams(null)
  }

  return (
    <div>
      <div className='flex justify-end  items-center gap-4 p-4'>

        <div className={`text-2xl ${haveConditions || selectedCategory || isDiscoutSelected ? "block" : "hidden"} bg-black/15 p-2 rounded-full cursor-pointer  text-primary`}
          onClick={resetFilter}>
          <IoReloadCircle />
        </div>

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
        toggleDiscount={toggleDiscount}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductCard
        data={allProducts}
      />

    </div >
  )
}

export default Product