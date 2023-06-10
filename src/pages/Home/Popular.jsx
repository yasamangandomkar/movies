import { useState } from "react"
import useFetch from "../../components/hooks/useFetch"
import SwitchTabs from "../../components/SwitchTabs/SwitchTabs"
import Carousel from "../../components/Carousel/Carousel"

const Popular = () => {
    const [endpoint, setEndpoint] = useState('movie')
    const onTabChange = (tab) => {
        setEndpoint(tab === "movie" ? "movie" : "tv")
    }
    const { data, loading } = useFetch(`/${endpoint}/popular`);

    return (
        <div className="py-8">
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} title='Whats Popular' />
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}

export default Popular