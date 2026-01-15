"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Slide {
  image: string;
}

const carousel1: Slide[] = [
  {image: "/carousel/carousel-001.jpg"},
//   {image: "/carousel/carousel-002.png"},
  {image: "/carousel/carousel-003.png"},
//   {image: "/carousel/carousel-004.png"},
  {image: "/carousel/carousel-005.jpg"},
  {image: "/carousel/carousel-006.png"},
  {image: "/carousel/carousel-007.png"},
];

const carousel2: Slide[] = [
  {image: "/carousel/carousel-001.jpg"},
  {image: "/carousel/carousel-002.png"},
  {image: "/carousel/carousel-003.png"},
  {image: "/carousel/carousel-004.png"},
  {image: "/carousel/carousel-005.jpg"},
  {image: "/carousel/carousel-006.png"},
  {image: "/carousel/carousel-007.png"},
];

const CarouselSection = () => {
  return (
    <section className="px-4 lg:px-8 pt-4 pb-8 lg:pb-16">
      <div className="block lg:hidden">
        <Swiper
          pagination={false}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          className="relative w-full h-44 md:h-70"
          navigation={false}
        >
          {carousel1.map((item, index) => (
            <SwiperSlide key={index}
              className="relative w-full md:w-165 h-39 md:h-64.75"
            >
              <Image
                src={item.image}
                alt={`Picture ${index + 1}`}
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:flex flex-col gap-4">
        <Swiper
          pagination={false}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          className="relative w-full h-125"
          navigation={false}
        >
          {carousel2.map((item, index) => (
            <SwiperSlide key={index}
              className="relative w-304 h-120"
            >
              <Image
                src={item.image}
                alt={`Picture ${index + 1}`}
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
};

export default CarouselSection;