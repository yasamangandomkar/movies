import dayjs from "dayjs"
import RatingCircle from "../RatingCircle/RatingCircle"
import { useNavigate } from "react-router-dom";
import PosterFallback from "../../assets/images/no-poster.png";
import { useSelector } from "react-redux";

const Card = ({ data, loading, fromSearch }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data?.poster_path
        ? url.poster + data?.poster_path
        : PosterFallback;

    return (
        <>
            {loading ?
                (
                    <div>loading...</div>
                )



                :
                (<div className="overflow-hidden" onClick={() =>
                    navigate(`/${data.media_type || mediaType}/${data.id}`)
                }>
                    <div className="relative h-48 w-full ">
                        <img src={posterUrl} alt="" className="rounded-md object-fill h-full w-full bg-cover" />
                        {!fromSearch && <div className="absolute -bottom-2 left-2">
                            <RatingCircle rating={data.vote_average.toFixed(
                                1
                            )} />
                        </div>}
                    </div>
                    <div className="flex flex-col justify-start items-start  w-full  ">
                        <span className="text-sm text-white py-3 text-center whitespace-nowrap">{data.title || data.name}</span>
                        <span className="text-blackLight text-xs font-bold">
                            {dayjs(data.release_date || data.first_air_date).format(
                                "MMM D, YYYY"
                            )}
                        </span>
                    </div>

                </div>)

            }

        </>
    )
}

export default Card