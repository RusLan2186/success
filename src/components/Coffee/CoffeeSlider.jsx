import React from 'react';
import { Swiper, SwiperSlide, Scrollbar, A11y } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Parallax } from 'swiper/modules';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import cl from './Coffee.module.scss';

const CoffeeSlider = React.memo((id) => {
  const coffeeList = useSelector((store) => store.coffee.coffee);

  return (
    <div className='slider__container'>
      <Swiper
        modules={[Navigation, Pagination, Parallax]}
        // effect='fade'
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        activeIndex={5}
        // slideActiveClass={id}
      >
        <div classname='swiper-button-next'></div>
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
