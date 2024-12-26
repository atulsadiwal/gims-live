import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";


const PlacementSlider = ({ placement, delay }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: delay, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {placement?.map((item, index) => (
          <SwiperSlide key={index}>
            <article className=" mx-auto cursor-grab">
              <img
                className="max-xl:h-full"
                src={item}
                alt="placement"
                loading="eager"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PlacementSlider