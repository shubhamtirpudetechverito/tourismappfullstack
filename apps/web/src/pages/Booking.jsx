import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api.js';

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: 1,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    api.getTour(id).then(setTour).catch((e) => setError(e.message));
  }, [id]);

  const total = tour ? tour.price * Number(form.travelers || 0) : 0;

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const booking = await api.createBooking({ tourId: id, ...form });
      setSuccess(booking);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!tour) return <div className="loading">Loading...</div>;

  if (success) {
    return (
      <div className="container">
        <div className="success">
          ✅ Booking confirmed! Reference #${success.id}
        </div>
        <div className="booking-card">
          <h4>{success.tourTitle}</h4>
          <div className="row">
            <span>👤 {success.name}</span>
            <span>📅 {success.date}</span>
            <span>👥 {success.travelers} traveler(s)</span>
            <span>💵 ${success.total}</span>
          </div>
        </div>
        <button className="btn" onClick={() => navigate('/bookings')}>
          View My Bookings
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: 640 }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Book: {tour.title}</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        {tour.destination} · {tour.duration} days
      </p>

      {error && <div className="error">{error}</div>}

      <form onSubmit={submit} style={{ background: 'white', padding: '1.5rem', borderRadius: 12 }}>
        <div className="form-group">
          <label>Full Name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Travel Date *</label>
          <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Number of Travelers *</label>
          <input type="number" min="1" required value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Total</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0a7cff' }}>${total}</div>
          </div>
          <button type="submit" className="btn">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}
