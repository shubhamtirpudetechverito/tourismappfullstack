import { Link } from 'react-router-dom';
import { useSaved } from '../SavedContext.jsx';

export default function TourCard({ tour }) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(tour.id);

  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await toggleSave(tour.id);
    } catch (err) {
      alert('Failed to update saved: ' + err.message);
    }
  };

  return (
    <div className="card">
      <button
        className={`save-btn ${saved ? 'saved' : ''}`}
        onClick={handleSave}
        title={saved ? 'Remove from saved' : 'Save destination'}
        aria-label={saved ? 'Remove from saved' : 'Save destination'}
      >
        {saved ? '♥' : '♡'}
      </button>
      <img src={tour.images[0]} alt={tour.title} />
      <div className="card-body">
        <h3>{tour.title}</h3>
        <p className="dest">📍 {tour.destination} · {tour.duration} days</p>
        <div className="meta">
          <span className="price">${tour.price}</span>
          <span className="rating">⭐ {tour.rating}</span>
        </div>
        <Link to={`/tours/${tour.id}`} style={{ marginTop: '1rem' }}>
          <button className="btn" style={{ width: '100%' }}>View Details</button>
        </Link>
      </div>
    </div>
  );
}
