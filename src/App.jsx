import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './component/Navbar/NavBar';
import Footer from './component/Footer/Footer';
import Loader from './component/Loader/Loader';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     // Assuming Loader component renders the loading spinner directly
  //     document.getElementById('loader').style.display = 'none';
  //   };

  //   window.addEventListener('load', handleLoad);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  return (
    <>
      {/* <div id="loader">
        <Loader />
      </div> */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
