import Cast from "../../components/Cast/Cast"
import DetailsBanner from "../DetailsBanner"
import Layout from '../../components/Layout/Layout'
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import VideoSection from "../../components/VideoSection/VideoSection";
import Similar from "../../components/Similar/Similar";
import Recommendation from "../../components/Recommendation/Recommendation";
import LayoutDetails from "../../components/Layout/LayoutDetails";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );

  return (
    <Layout>
    <LayoutDetails>
    <DetailsBanner/>
        <Cast data={credits?.cast} loading={creditsLoading}/>
        {/* <VideoSection data={data}/> */}
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
    </LayoutDetails>
    </Layout>
  )
}

export default Details