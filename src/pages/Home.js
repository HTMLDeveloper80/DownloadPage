import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/navbar';
import MainScreen from '../components/mainscreen';
import Footer from '../layouts/footer';
import Instruction from '../components/instruction';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('accessToken'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    window.location.href="/";
  };

  return (
    <div className='page-container'>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className='main-content'>
        <MainScreen/>
        <Instruction/>
      </main>
      <Footer/>
    </div>
  );
}
  
export default Home;