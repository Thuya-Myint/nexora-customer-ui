/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'

import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import HomeProductCard from '../components/HomeProductCard'

import { popularItems, saleItems } from '../constants/homeProducts'
import BrowseByCategory from '../components/BrowseByCategory'
const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  return (
    <div className="">
      <Carousel />
      <Banner />
      <HomeProductCard
        header={"Popular Items"}
        data={popularItems}
        link={{
          name: "All product Items",
          type: "allProduct"
        }}
      />
      <HomeProductCard
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