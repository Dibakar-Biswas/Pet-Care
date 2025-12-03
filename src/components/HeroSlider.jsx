import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200",
      title: "Keep Your Pets Warm This Winter",
      description: "Explore our winter care services for your furry friends",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200",
      title: "Winter Grooming & Coat Protection",
      description:
        "Protect your pet’s coat with moisturizing treatments and winter-safe grooming products.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200",
      title: "Healthy Nutrition for Cold Days",
      description:
        "Keep your pets strong and energetic with a balanced winter diet plan.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6i9DgwxV_TvVan_nzEHpg4cV3cIDJHteKw&s",
      title: "Warm Beds & Cozy Spaces",
      description:
        "Provide heated sleeping areas and comfy blankets for your pets this winter.",
    },
  ];
  return (
    <div className="mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        // className="h-[300px] md:h-[600px] rounded-lg"
        className="h-[400px] rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex items-end justify-center">
                <div
                  className="text-center text-black bg-white px-6 max-w-3xl"
                  data-aos="fade-up"
                >
                  <h1 className="text-2xl md:text-4xl font-bold mb-0">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg mb-6">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
