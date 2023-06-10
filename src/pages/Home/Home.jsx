import Hero from "../../components/Hero/hero"
import Layout from "../../components/Layout/Layout"
import LayoutDetails from "../../components/Layout/LayoutDetails"
import Trending from "../../components/Trending/Trending"
import Popular from "./Popular"
import TopRated from "./TopRated"

const Home = () => {
  return (
 <>
    <Layout>
    <Hero/>
   <LayoutDetails>
   <Trending/>
      <Popular/>
      <TopRated/>
   </LayoutDetails>
    </Layout>
    </>
  )
}

export default Home