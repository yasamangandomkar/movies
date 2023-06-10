import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import Card from "../components/Carousel/Card"
const Explore = () => {
  const { mediaType } = useParams();
  console.log(mediaType)
  // const [data, setData] = useState(null)
  const { data } = useFetch(`/genre/${mediaType}/list`);

//   const fetchNextPageData = () => {
//     fetchDataFromApi(
//         `/discover/${mediaType}?page=${pageNum}`,
//         filters
//     ).then((res) => {
//         if (data?.results) {
//             setData({
//                 ...data,
//                 results: [...data?.results, ...res.results],
//             });
//         } else {
//             setData(res);
//         }
//         setPageNum((prev) => prev + 1);
//     });
// };
  return (
    <div>

<div>
{data?.results?.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <Card
                                            key={index}
                                            data={item}
                                         
                                        />
                                    );
                                })}
</div>


    </div>
  )
}

export default Explore