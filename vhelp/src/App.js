import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/homePage/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
