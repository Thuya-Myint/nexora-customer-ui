import { categories } from '../constants/category'
const BrowseByCategory = () => {
  return (
    <div className="p-4 my-10">
      <h1 className="bg-primary px-4 py-2 rounded-md w-fit text-xl text-white">Browse By Category</h1>
      <div className='grid grid-cols-8 mt-6 gap-6'>
        {
          categories.map((item, index) => (
            <div key={index} className='p-2 bg-linear-60 text-center from-slate-100 to-slate-300 rounded-xl shadow-xl shadow-black/10'>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BrowseByCategory