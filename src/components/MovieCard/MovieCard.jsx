import dayjs from "dayjs"
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data, loading, fromSearch }) => {
    const navigate = useNavigate();


    return (
        <>
            {loading ?
                (
                    <div>loading...</div>
                )



                :
                (<div onClick={() =>
                    navigate(`/${data.media_type || mediaType}/${data.id}`)
                }>
                    <div className="relative h-48 w-full ">
                        <img src={data} alt="" className="rounded-md h-full w-full" />

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

export default MovieCard