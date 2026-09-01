import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/navigation"

import { carouselItems } from '../constants/carousel'


const Carousel = () => {
  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      // pagination={{ clickable: true }}
      >
        {
          carouselItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className=' '>
              <div className='flex justify-center items-center bg-primary p-4 text-white'>
                <div className=' cursor-pointer'>
                  <h1 className='text-2xl'>{item.title}</h1>
                  <div className='flex gap-2 items-center'>
                    <div>{item.description}</div>
                    <Link to={item.quickLink} className="bg-white p-1 text-primary rounded-lg text-sm">
                      {"detail >>>"}
                    </Link>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel