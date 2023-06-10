import Carousel from "../Carousel/Carousel";
import useFetch from "../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
      <div className="my-8">
        <h4 className="text-xl text-white my-2">Recomendation </h4>
          <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
    />
      </div>
    );
};

export default Recommendation;