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

const data: Slide[] = [
  {image: "/testimonials/testimonial-01.png"},
  {image: "/testimonials/testimonial-02.png"},
  {image: "/testimonials/testimonial-03.png"},
  {image: "/testimonials/testimonial-04.png"},
  {image: "/testimonials/testimonial-05.png"},
  {image: "/testimonials/testimonial-06.png"},
  {image: "/testimonials/testimonial-07.png"},
  {image: "/testimonials/testimonial-08.png"},
  {image: "/testimonials/testimonial-09.png"},
];

const TestimonialSection = () => {
  return (
    <section
      className="bg-(--primary) flex flex-col items-center gap-8 lg:gap-12 px-6 lg:px-24 py-8 lg:py-16"
    >
      <h4 className="text-background!">TESTIMONIALS</h4>
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        className="relative h-76 md:h-160 w-full md:w-180"
        navigation={false}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}
            className="relative flex"
          >
            <Image
              src={item.image}
              alt={`Testimonial ${index + 1}`}
              fill
              style={{objectFit: "cover", borderRadius: "8px"}}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
};

export default TestimonialSection;