import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../api.js';
import Gallery from '../components/Gallery.jsx';
import { useSaved } from '../SavedContext.jsx';

export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState('');
  const { isSaved, toggleSave } = useSaved();

  useEffect(() => {
    api.getTour(id).then(setTour).catch((e) => setError(e.message));
  }, [id]);

  if (error) return <div className="container error">{error}</div>;
  if (!tour) return <div className="loading">Loading...</div>;

  const saved = isSaved(tour.id);

  const handleSave = async () => {
    try {
      await toggleSave(tour.id);
    } catch (err) {
      alert('Failed: ' + err.message);
    }
  };

  const info = tour.info || {};

  return (
    <div className="container">
      <Gallery images={tour.images} alt={tour.title} />

      <div className="tour-detail">
        <div className="body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h1>{tour.title}</h1>
              <p className="sub">
                📍 {tour.destination} · {tour.duration} days · ⭐ {tour.rating}
              </p>
            </div>
            <button
              className={`btn ${saved ? 'btn-danger' : 'btn-outline'}`}
              onClick={handleSave}
            >
              {saved ? '♥ Saved' : '♡ Save Destination'}
            </button>
          </div>

          <p>{tour.description}</p>

          {/* Quick facts */}
          <div className="info-grid">
            {info.bestTime && (
              <div className="info-box">
                <div className="label">Best Time</div>
                <div className="value">{info.bestTime}</div>
              </div>
            )}
            {info.language && (
              <div className="info-box">
                <div className="label">Language</div>
                <div className="value">{info.language}</div>
              </div>
            )}
            {info.currency && (
              <div className="info-box">
                <div className="label">Currency</div>
                <div className="value">{info.currency}</div>
              </div>
            )}
          </div>

          {/* History */}
          {info.history && (
            <div className="info-block">
              <h3>📜 History</h3>
              <p>{info.history}</p>
            </div>
          )}

          {/* Culture */}
          {info.culture && (
            <div className="info-block">
              <h3>🎭 Culture & People</h3>
              <p>{info.culture}</p>
            </div>
          )}

          {/* Cuisine */}
          {info.cuisine && (
            <div className="info-block">
              <h3>🍽️ Local Cuisine</h3>
              <p>{info.cuisine}</p>
            </div>
          )}

          <div className="info-block">
            <h3>✨ Highlights</h3>
            <ul>
              {tour.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>

          <div className="info-block">
            <h3>📦 What's Included</h3>
            <ul>
              {tour.includes.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>

          {/* Tips */}
          {info.tips && info.tips.length > 0 && (
            <div className="info-block">
              <h3>💡 Traveler Tips</h3>
              <ul>
                {info.tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Starting from</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0a7cff' }}>${tour.price}</div>
              <div style={{ fontSize: '0.85rem', color: '#666' }}>per person</div>
            </div>
            <button className="btn" onClick={() => navigate(`/book/${tour.id}`)}>
              Book Now →
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/">← Back to all tours</Link>
      </div>
    </div>
  );
}
