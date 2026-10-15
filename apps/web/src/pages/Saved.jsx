import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api.js';
import TourCard from '../components/TourCard.jsx';
import { useSaved } from '../SavedContext.jsx';

export default function Saved() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { savedIds } = useSaved();

  useEffect(() => {
    api.getSaved().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [savedIds.length]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h1 style={{ marginBottom: '0.5rem' }}>❤️ Saved Destinations</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Your dream trips, all in one place.
      </p>

      {items.length === 0 && (
        <div className="empty">
          You haven't saved any destinations yet. <Link to="/">Explore tours →</Link>
        </div>
      )}

      <div className="grid">
        {items.map((s) => (
          <TourCard key={s.tourId} tour={s.tour} />
        ))}
      </div>
    </div>
  );
}
