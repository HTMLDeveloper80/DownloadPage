import './App.css';
import Navbar from './layouts/navbar';
import MainScreen from './components/mainscreen';
import Footer from './layouts/footer';
import Instruction from './components/instruction';

function App() {
  return (
    <>
      <Navbar/>
      <MainScreen/>
      <Instruction/>
      <Footer/>
    </>
  );
}

export default App;
