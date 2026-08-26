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
    <div className='p-10 relative'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }}
      >

        {
          carouselItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className=' '>
              <div className='flex justify-center '>

                <div className='w-100 h-40 relative cursor-pointer'>
                  <div className='bg-black/30 absolute  z-50 w-full h-full flex flex-col gap-2 justify-center items-center text-white'>
                    <h1 className='text-2xl'>{item.title}</h1>
                    <div>{item.description}</div>
                    <Link to={item.quickLink} className="bg-primary p-1 rounded-lg text-sm">
                      {"detail >>>"}
                    </Link>
                  </div>
                  <img src={item.photoUrl} className='' />
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