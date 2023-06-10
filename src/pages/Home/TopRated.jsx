import { useState } from "react"
import useFetch from "../../components/hooks/useFetch"
import SwitchTabs from "../../components/SwitchTabs/SwitchTabs"
import Carousel from "../../components/Carousel/Carousel"

const TopRated = () => {
    const [endpoint, setEndpoint] = useState('movie')
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }
    const { data, loading } =  useFetch(`/${endpoint}/top_rated`);
  
    return (
        <div>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} title='Top Rated'/>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default TopRated