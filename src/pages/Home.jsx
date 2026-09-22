/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'

import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'

import { popularItems, saleItems, modifiedProduct } from '../constants/products'
import BrowseByCategory from '../components/BrowseByCategory'
import ProductCardM from '../components/ProductCardM'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  return (
    <div className="">
      <Carousel />
      <Banner />
      <ProductCardM
        header={"Popular Items"}
        data={modifiedProduct}
        prevLink={"/"}
        link={{
          name: "All product Items",
          type: "allProduct"
        }}
      />
      <ProductCardM
        header={"Sale Items"}
        data={modifiedProduct}
        prevLink={"/"}
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