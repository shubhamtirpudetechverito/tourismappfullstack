const BASE = '/api';

async function handle(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const api = {
  getTours: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v)
    ).toString();
    return fetch(`${BASE}/tours${qs ? '?' + qs : ''}`).then(handle);
  },
  getTour: (id) => fetch(`${BASE}/tours/${id}`).then(handle),
  createBooking: (payload) =>
    fetch(`${BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(handle),
  getBookings: () => fetch(`${BASE}/bookings`).then(handle),
  getSaved: () => fetch(`${BASE}/saved`).then(handle),
  saveDestination: (tourId) =>
    fetch(`${BASE}/saved`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tourId }),
    }).then(handle),
  unsaveDestination: (tourId) =>
    fetch(`${BASE}/saved/${tourId}`, { method: 'DELETE' }).then(handle),
};
