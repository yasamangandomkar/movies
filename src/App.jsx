
import { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/HomeSlice'
import Home from './pages/Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Explore from './pages/Explore'
import Details from './pages/Home/Details'
import SearchResults from './pages/Home/SerchResults'
function App() {
  const dispatch = useDispatch()
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then(res => {
     
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };

      dispatch(getApiConfiguration(url))
    }
    )
  }
  useEffect(() => {
    fetchApiConfig()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/explore/:mediaTye' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
