import { bannerImages } from '../constants/banner'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
const Banner = () => {
  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className=''
      // pagination={{ clickable: true }}
      >
        {
          bannerImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className=' '>
              <div className='relative flex justify-center items-center w-full md:h-[70vh] h-[20vh]'>
                <img src={item.photoUrl} alt="" className='w-full h-full' />
                <div className='w-full h-full absolute p-4'>
                  <p className='font-bold text-2xl'>{item.title}</p>
                  <p>{item.subTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div >
  )
}

export default Banner