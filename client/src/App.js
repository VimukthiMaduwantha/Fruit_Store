import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register_page from './view/Register_page';
import Welcome_page from './view/Welcome_page';
import Login_page from './view/Login_page';
import Home_page from './view/Home_page';
import Shop_page from './view/Shop_page';
import About_page from './view/About_page';
import Footer from './components/Footer';
import FruitDetails from './components/FruitDetails';
import Cart from './view/Cart';
import Checkoot from './view/Checkoot';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Welcome_page />} />
        <Route exact path='/registerUser' element={<Register_page />} />
        <Route exact path='/loginUser' element={<Login_page />} />
        <Route exact path='/home' element={<Home_page />} />
        <Route exact path='/shop' element={<Shop_page />} />
        <Route exact path='/about' element={<About_page />} />
        <Route exact path='/fruitStore' element={<FruitDetails />} />
        <Route exact path='/myCart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkoot />} />
      </Routes>
    </>
  );
}

export default App;
