import { useEffect, useState } from 'react';
import { api } from '../api.js';
import TourCard from '../components/TourCard.jsx';

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ destination: '', sort: '' });

  useEffect(() => {
    setLoading(true);
    api
      .getTours(filters)
      .then(setTours)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <>
      <section className="hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Handpicked tours to the world's most breathtaking destinations.</p>
      </section>

      <div className="container">
        <div className="filters">
          <input
            placeholder="Search destination or country..."
            value={filters.destination}
            onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
          />
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {loading && <div className="loading">Loading tours...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && !error && tours.length === 0 && (
          <div className="empty">No tours found.</div>
        )}

        <div className="grid">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </>
  );
}
