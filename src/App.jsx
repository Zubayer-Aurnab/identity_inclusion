import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos'
import { Outlet } from 'react-router-dom';
import NavBar from './component/Navbar/NavBar';
import Footer from './component/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
