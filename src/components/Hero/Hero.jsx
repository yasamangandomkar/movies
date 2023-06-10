import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import Search from "../search/Search"
import { useSelector } from "react-redux"
import Img from "../LazyLoadImage/Img"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"

const Hero = () => {
    const { data, loading } = useFetch("/movie/upcoming")
    const [background, setBackground] = useState("")
    const { url } = useSelector(state => state.home)

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);


    return (
        <div >
            {!loading ? (
                <div className='flex  flex-col justify-center items-center text-center '>
                    <div className=" relative top-0  left-0  w-full  ">
                        <Img src={background} className='w-full h-full bg-cover' />
                        <div className="w-screen left-0 right-0 absolute  h-16 -bottom-8 bg-black blur-sm  "></div>
                    </div>
                    <div className="absolute top-22  text-white lg:space-y-5 space-y-2">
                        <h1 className="lg:text-6xl font-bold">Welcome.</h1>
                        <p className="lg:text-lg text-md">Milions of movies ,tv,and people to discover,explore now</p>
                        <div className="hidden lg:inline-block w-full">
                            <Search />
                        </div>
                    </div>
                </div>
            )
                : <div className="h-screen "><LoaderSpinner /></div>
            }
        </div>
    )
}

export default Hero