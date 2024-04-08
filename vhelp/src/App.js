import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/homePage/Home';
import Foodpark from './components/foodpark/Foodpark';
import Mess from './components/mess/Mess';
import Laundry from './components/laundry/Laundry';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodpark" element={<Foodpark />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/mess" element={<Mess />} />
      </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
