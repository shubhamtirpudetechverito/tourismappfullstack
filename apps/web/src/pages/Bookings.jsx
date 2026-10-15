import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api.js';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getBookings().then(setBookings).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h1 style={{ marginBottom: '1.5rem' }}>My Bookings</h1>

      {bookings.length === 0 && (
        <div className="empty">
          No bookings yet. <Link to="/">Browse tours →</Link>
        </div>
      )}

      {bookings.map((b) => (
        <div key={b.id} className="booking-card">
          <h4>
            {b.tourTitle}
            <span className="badge">{b.status}</span>
          </h4>
          <div className="row">
            <span>👤 {b.name}</span>
            <span>📧 {b.email}</span>
            <span>📅 {b.date}</span>
            <span>👥 {b.travelers} traveler(s)</span>
            <span>💵 ${b.total}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
