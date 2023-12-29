import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// import 'swiper/swiper-bundle.css';

import cl from './Coffee.module.scss';

const CoffeeSlider = React.memo(({ image }) => {
  const coffeeList = useSelector((store) => store.coffee.coffee);

  return (
    <div className='slider__container'>
      <Swiper
        modules={[Navigation, Pagination]}
        // effect='fade'
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log(5 + 10)}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
      >
        {coffeeList.map((coffee) => (
          <SwiperSlide key={coffee.id} className='swiper-slide'>
            <span> {coffee.title}</span>
            <div className={cl.imageModal}>
              <img src={coffee.image} alt='coffee' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default CoffeeSlider;
