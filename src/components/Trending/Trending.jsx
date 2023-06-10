import { useState } from "react"
import SwitchTabs from "../SwitchTabs/SwitchTabs"
import useFetch from "../hooks/useFetch"
import Carousel from "../Carousel/Carousel"

const Trending = () => {
    const [endpoint, setEndpoint] = useState('day')
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    return (
        <div className="mt-24">
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} title="Trending" />
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending