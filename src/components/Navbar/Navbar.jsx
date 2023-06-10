import { useState } from 'react'
import image from '../../assets/images/movix-logo.svg'
import { BiSearchAlt2, BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Search from '../search/Search'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setShow(true)
        setSearch(e.target.value)
    }

    return (
        <div className='w-screen flex bg-black lg:bg-opacity-40 z-[1000] sticky top-0   mx-auto  justify-between  text-white items-center  p-3  '>
            <div className='flex md:max-w-xl lg:max-w-5xl w-full mx-auto  justify-between '>
                <div className=""><img src={image} alt="" /></div>
                <div className='flex gap-5 items-center'>
                    <ul className='lg:flex hidden gap-5 items-center'>
                        <li className='hover:text-red-600'>
                            Movies</li>
                        <li className='hover:text-red-600'>
                            Tv Shows
                        </li>
                    </ul>
                    <ul className={toggle ? 'absolute z-50 top-16 left-0 bg-black p-3 w-full flex-col flex space-y-4' : "hidden"}>
                        <li className='hover:text-red-600'> Movies</li>
                        <li className='hover:text-red-600'>Tv Shows</li>
                    </ul>
                    <div className='lg:hidden text-xl flex gap-2 '  >
                        <BiSearchAlt2 size={20} onClick={() => setShow(!show)} />
                        <div onClick={() => setToggle(!toggle)}>
                            {toggle ? <AiOutlineClose /> : <BiMenu />}
                        </div>
                    </div>
                </div>

            </div>
            {show &&
                <div className='absolute w-screen left-0  top-16  z-50'>
                    <Search onChange={handleChange}
                        value={search} />
                    <button className='absolute right-0 h-full w-8 text-xl border-0 outline outline-0 focus:outline-0 focus:ring-0 text-black'><BiSearchAlt2 /></button>
                </div>
            }

        </div>
    )
}

export default Navbar