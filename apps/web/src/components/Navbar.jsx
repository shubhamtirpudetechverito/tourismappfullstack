import { Link } from 'react-router-dom';
import { useSaved } from '../SavedContext.jsx';

export default function Navbar() {
  const { savedIds } = useSaved();
  return (
    <header className="navbar">
      <Link to="/" className="logo">🌍 Wanderlust Tours</Link>
      <nav>
        <Link to="/">Tours</Link>
        <Link to="/saved">
          ❤️ Saved
          {savedIds.length > 0 && <span className="nav-badge">{savedIds.length}</span>}
        </Link>
        <Link to="/bookings">My Bookings</Link>
      </nav>
    </header>
  );
}
