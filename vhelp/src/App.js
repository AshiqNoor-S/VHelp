import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Foodpark from './components/foodpark/Foodpark';
import Mess from './components/mess/Mess';
import Laundry from './components/laundry/Laundry';
import Footer from './components/footer/Footer';
import LaundryData from './components/laundry/LaundryData';
import MessData from './components/foodpark/Table';
import Nav from './components/header/Nav';
import FoodParkMenuUpdate from './components/foodpark/FoodParkMenuUpdate';
import Calendar from "./components/laundry/calendar";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ background: 'linear-gradient(90deg, rgba(167, 169, 255, 1) 15%, rgba(142, 143, 250, 0.9136029411764706) 51%, rgba(142, 143, 250, 1) 89%, rgba(134, 123, 251, 1) 100%, rgba(194, 217, 255, 1) 100%, rgba(119, 82, 254, 0.8015581232492998) 100%)' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodpark" element={<Foodpark />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="/mess" element={<Mess />} />
        <Route path="/laundry-data" element={<LaundryData/>} />
        <Route path="/mess-data" element={<MessData/>} />
          <Route path="/foodpark-menu-update" element={<FoodParkMenuUpdate  />} />
          <Route path="/laundry-data" element={<LaundryData/>} />
          <Route path ="/calendar" element={<Calendar/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
