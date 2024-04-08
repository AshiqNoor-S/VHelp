import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Foodpark from './components/foodpark/Foodpark';
import Mess from './components/mess/Mess';
import Laundry from './components/laundry/Laundry';
import Footer from './components/footer/Footer';
import LaundryData from './components/laundry/LaundryData';
import FoodParkMenuUpdate from './components/foodpark/FoodParkMenuUpdate';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ background: '#C2D9FF' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodpark" element={<Foodpark />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="/mess" element={<Mess />} />
          <Route path="/foodpark-menu-update" element={<FoodParkMenuUpdate  />} />
          <Route path="/laundry-data" element={<LaundryData/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
