import Navbar from '../layouts/navbar';
import MainScreen from '../components/mainscreen';
import Footer from '../layouts/footer';
import Instruction from '../components/instruction';

function Home() {
  return (
    <>
      <Navbar/>
      <MainScreen/>
      <Instruction/>
      <Footer/>
    </>
  );
}
  
export default Home;