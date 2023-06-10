import{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";



import noResults from "../../assets/images/no-results.png";
import { fetchDataFromApi } from "../../utils/api";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import Card from "../../components/Carousel/Card";

const SearchResults = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="w-full px-6 mt-12">
            {loading && <LoaderSpinner initial={true} />}
            {!loading && (
                <div>
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="text-white text-2xl my-6">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="grid grid-cols-2 overflow-hidden lg:grid-cols-4 gap-5 w-full"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<LoaderSpinner />}
                            >
                                {data?.results?.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <Card
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                       <div  className="text-center text-blue-300 text-6xl">
                        <span>not found</span>
                        <img className="w-full h-screen" src={noResults}/>
                          </div> 
                      
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchResults;