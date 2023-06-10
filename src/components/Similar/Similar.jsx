
import Carousel from "../Carousel/Carousel";
import useFetch from "../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
    <div>
        <h4 className="text-white text-2xl my-2">Similar</h4>
            <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    </div>
    );
};

export default Similar;