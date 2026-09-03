import { categories } from '../constants/category'
const FilterModal = ({ isModalOpen, setIsModalOpen, isDiscoutSelected, toggleDiscount, selectedCategory, setSelectedCategory }) => {


  const selectCategory = (name) => {
    if (selectedCategory === name) {
      return setSelectedCategory("")
    }
    setSelectedCategory(name)
  }



  return (
    <div className={`${isModalOpen ? "block" : "hidden"} bg-black/20 h-screen fixed inset-0 z-50 flex justify-center items-center`}
      onClick={() => setIsModalOpen(false)}>
      <div className='bg-white w-1/3 max-h-1/2 overflow-auto  rounded-xl shadow-black/10 shadow-2xl' onClick={(e) => e.stopPropagation()}>

        <div className='p-6'>
          <h1 className='text-2xl'>Filter By Category</h1>
          <div className='w-20 h-1 bg-primary rounded-xl mb-6'>

          </div>
          <div className='flex flex-wrap gap-8'>
            {
              categories.map((item, index) => (
                <div
                  key={index}
                  className={` p-2 px-4 cursor-pointer rounded-lg ${selectedCategory === item.name.toLowerCase() ? "bg-primary text-white" : "bg-black/3"}`}
                  onClick={() => {

                    selectCategory(item.name.toLowerCase())
                  }}
                >
                  {item.name}
                </div>
              ))
            }
          </div>
          <div
            className={`mt-10 border-2 rounded-lg border-primary ${isDiscoutSelected ? "bg-primary text-white" : ""} w-fit p-2 cursor-pointer`}
            onClick={toggleDiscount}
          >
            discount item
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal