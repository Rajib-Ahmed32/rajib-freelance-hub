import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bannerSlides from "../data/bannerSlides.json";

function BannerSlider() {
  return (
    <div className="w-full bg-[#e8faf4] dark:bg-gray-900 py-6 rounded-md">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-6xl h-72 md:h-96"
      >
        {bannerSlides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center lg:items-start p-6">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center lg:items-start p-6 text-white">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
