"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Slide {
  image: string;
  name: string;
  quote: string;
}

const data: Slide[] = [
  {
    image: "/testimonials/tochukwu-enemuo.jpeg",
    name: "Tochukwu Enemuo",
    quote: "I experienced decision paralysis for two years, feeling too scared to leave my well-paying job. Even though I had another offer at the time, it was difficult to blindly move to a different company. However, when I attended the “WINNING Q2” Session held by Phoszade in 2025, I gained so much clarity that I immediately wrote my resignation and acceptance letters. I can boldly say that this is the best career decision I have ever made."
  },
  {
    image: "/testimonials/tochukwu-enemuo.jpeg",
    name: "Tochukwu Enemuo",
    quote: "I experienced decision paralysis for two years, feeling too scared to leave my well-paying job. Even though I had another offer at the time, it was difficult to blindly move to a different company. However, when I attended the “WINNING Q2” Session held by Phoszade in 2025, I gained so much clarity that I immediately wrote my resignation and acceptance letters. I can boldly say that this is the best career decision I have ever made."
  },
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
            />
            {/* <div className="flex flex-col items-center gap-2">
              <span
                className="flex items-center justify-center rounded-sm bg-[#F3F3F3] w-23.5 h-22.75"
              >
                <span className="relative w-14.25 h-10.5">
                  <Image
                    src={item.image}
                    alt={`Testimonial ${index + 1}`}
                    fill
                    style={{objectFit: "contain"}}
                    loading="eager"
                  />
                </span>
              </span>
              <span className="text-name">{item.name}</span>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
};

export default TestimonialSection;