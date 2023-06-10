import { SwiperSlide, Swiper } from "swiper/react"
import avatar from '../../assets/images/avatar.png'
import { useSelector } from "react-redux"
import 'swiper/css';
const Cast = ({ data }) => {
  const { url } = useSelector(state => state.home)
  return (

    <div className="my-8">
      <h4 className="text-white text-2xl my-3 font-light">Top Cast</h4>
      <Swiper
        spaceBetween={6}
        slidesPerView={3}
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
            spaceBetween: 10,
          },
        }}
      >
        {data?.map((item) => {
          let imgUrl = item.profile_path
            ? url.profile + item.profile_path
            : avatar;
          return (

            <SwiperSlide className="flex flex-col justify-center items-center" key={item.id}>
              <div className="w-24 h-24">
                <img className="w-full rounded-full" src={imgUrl} alt="" />
              </div>
              <span className="text-white text-sm mt-2">{item.name}</span>
              <span className="text-gray-400 text-sm">{item.character}</span>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>

  )
}

export default Cast