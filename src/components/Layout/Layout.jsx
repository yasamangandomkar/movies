import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='md:max-w-xl lg:max-w-5xl w-full  mx-auto'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout