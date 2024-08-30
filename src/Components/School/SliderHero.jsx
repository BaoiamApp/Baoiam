import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

// Import JSON data
import cards from './cards.json';
import swiperSettings from './SwiperSettings.json';

export default function App() {
  return (
    <div className="">
      <Swiper
        effect={swiperSettings.effect}
        grabCursor={swiperSettings.grabCursor}
        modules={[EffectCards, Autoplay]}
        autoplay={swiperSettings.autoplay}
        className={`mySwiper w-full h-full sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-100 lg:h-120 xl:w-120 xl:h-144`}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center rounded-xl text-2xl font-bold text-white"
            style={{
              backgroundColor: card.backgroundColor,
              backgroundImage: card.backgroundImage ? `url(${card.backgroundImage})` : 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

