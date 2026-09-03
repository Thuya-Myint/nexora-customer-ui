/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'

import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'

import { popularItems, saleItems } from '../constants/products'
import BrowseByCategory from '../components/BrowseByCategory'
const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  return (
    <div className="">
      <Carousel />
      <Banner />
      <ProductCard
        header={"Popular Items"}
        data={popularItems}
        link={{
          name: "All product Items",
          type: "allProduct"
        }}
      />
      <ProductCard
        header={"Sale Items"}
        data={saleItems}
        link={{
          name: "All Sale Items",
          type: "saleItems"
        }}
      />
      <BrowseByCategory
      />
    </div>
  )
}

export default Home