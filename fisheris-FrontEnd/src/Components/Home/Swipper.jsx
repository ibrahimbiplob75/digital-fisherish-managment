import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../assets/fish-2.png";
import img2 from "../../assets/fish-2.png";
import img3 from "../../assets/fish-2.png";


const Swipper = () => {
  return (
    <section className="py-12 bg-gray-50">
      {/* Enhanced Section Title */}
      <SectionTitle subTitle={"welcome"} title={"Our services"} />

      {/* Swiper Container */}
      <Swiper
        slidesPerView={3} // Default for mobile
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-12 mb-12 "
      >
        {/* Slides */}
        {[
          { img: img1, label: "মাছ বাজার" },
          { img: img2, label: "মাছের চাষ" },
          { img: img3, label: "মাছের পোনা" },
          
        ].map((item, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* Image */}
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-auto max-w-xs object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-3xl text-white font-bold">{item.label}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Swipper;
