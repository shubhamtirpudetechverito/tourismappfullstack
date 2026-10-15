import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import TourDetail from './pages/TourDetail.jsx';
import Booking from './pages/Booking.jsx';
import Bookings from './pages/Bookings.jsx';
import Saved from './pages/Saved.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/book/:id" element={<Booking />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  );
}
