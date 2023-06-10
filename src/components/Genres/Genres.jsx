import { useSelector } from "react-redux";


const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);
    return (
        <div className="text-white absolute top-0 z-10">
          {data?.map((g) => {
            console.log(genres)
                // if (!genres[g]?.name) return;
                return (
                    <div key={g.id} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    )
}

export default Genres