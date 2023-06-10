import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { useSelector } from "react-redux";
import PosterFallback from '../assets/images/no-poster.png'
import dayjs from "dayjs";
import RatingCircle from "../components/RatingCircle/RatingCircle";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";
const DetailsBanner = () => {
  const { url } = useSelector((state) => state.home)
  const { id, mediaType } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  return (
    <div className="my-5" >
      {!loading ?
        <div className="">
          <img
            className="absolute top-0 left-0 right-0 -z-50 opacity-10 w-full h-full"
            src={url.backdrop + data?.backdrop_path}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full items-center  justify-center">
            <div className="z-50 h-96 flex justify-center  w-full ">
              {data?.poster_path ? (
                <img
                  className="w-3/4 h-full bg-cover rounded-3xl"
                  src={
                    url.backdrop +
                    data?.poster_path
                  }
                />
              ) : (
                <img
                  className="posterImg"
                  src={PosterFallback}
                />
              )}
            </div>
            <div className="z-50  flex flex-col justify-center space-y-2 mt-8 lg:mt-0">
              <div className="text-white text-xl">
                {`${data?.name || data?.title
                  } (${dayjs(
                    data?.release_date
                  ).format("YYYY")})`}
              </div>
              <div className="text-gray-400">
                {data?.tagline}
              </div>

              <div className="flex gap-3 my-2">
                <RatingCircle
                  rating={data?.vote_average.toFixed(
                    1
                  )}
                />

              </div>
              {/* overview */}
              <div className="text-white space-y-2">
                <h4 className="text-2xl">Overview</h4>
                <p className="text-md leading-normal ">{data?.overview}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm my-5">
                {data?.status && (
                  <div className="flex flex-col">
                    <span className="text-bold text-white">
                      Status :{" "}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {data.status}
                    </span>
                  </div>
                )}
                {data?.release_date && (
                  <div className="flex flex-col">
                    <span className="text-bold text-white">
                      Release Date :{" "}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {dayjs(
                        data.release_date
                      ).format("MMM D, YYYY")}
                    </span>
                  </div>
                )}
                {data?.runtime && (
                  <div className="flex flex-col">
                    <span className="text-bold text-white">
                      Runtime :{" "}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {data.runtime}
                    </span>
                  </div>
                )}
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        : (<LoaderSpinner />)
      }
    </div>

  )
}

export default DetailsBanner