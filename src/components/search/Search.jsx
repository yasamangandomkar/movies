import { useState } from "react"
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="relative rounded-3xl flex bg-white w-full" onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler}  >
      <input className="w-full text-md p-3 bg-white rounded-tl-3xl rounded-bl-3xl focus:border-white border outline-none text-black" type="text" placeholder="search for a movie or tv show ..." />
      <button className="bg-gradient-to-l from-pink  to-orang rounded-tr-3xl rounded-br-3xl p-3">search</button></div>
  )
}

export default Search