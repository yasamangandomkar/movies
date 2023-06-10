import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import "swiper/css/navigation";
import 'swiper/css';
const Carousel = ({ data, endpoint, loading }) => {
  const navigate = useNavigate()

  return (
    <>
   {!loading? <Swiper
      className="bg-black"
      spaceBetween={10}
      slidesPerView={3}
      navigation={true} modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >

      {data?.map((item) => {
      
        return (
          <SwiperSlide
            onClick={() =>
              navigate(
                `/${item.media_type || endpoint}/${item.id
                }`
              )
            }
            className="cursor-pointer flex flex-col rounded-md w-full overflow-hidden" key={item.id} >
            <Card data={item} loading={loading}/>
          </SwiperSlide>
        )
      })}

    </Swiper>:
  (
    <LoaderSpinner/>
  )
  }
  </>
  )

}

export default Carousel