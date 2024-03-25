// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

function SwiperList({ items, swiperItem }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{swiperItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
export default SwiperList;
