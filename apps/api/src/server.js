import Fastify from 'fastify';
import cors from '@fastify/cors';
import { tours, bookings, savedDestinations } from './data.js';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: ['http://localhost:5173'],
  credentials: true,
});

// ---------- Health ----------
fastify.get('/api/health', async () => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
}));

// ---------- Tours ----------
fastify.get('/api/tours', async (request) => {
  const { destination, minPrice, maxPrice, sort } = request.query;
  let result = [...tours];

  if (destination) {
    const q = destination.toLowerCase();
    result = result.filter(
      (t) =>
        t.destination.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.country.toLowerCase().includes(q)
    );
  }
  if (minPrice) result = result.filter((t) => t.price >= Number(minPrice));
  if (maxPrice) result = result.filter((t) => t.price <= Number(maxPrice));

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  return result;
});

fastify.get('/api/tours/:id', async (request, reply) => {
  const tour = tours.find((t) => t.id === Number(request.params.id));
  if (!tour) return reply.code(404).send({ error: 'Tour not found' });
  return tour;
});

// ---------- Saved Destinations ----------
fastify.get('/api/saved', async () => {
  // Enrich with tour details
  return savedDestinations
    .map((s) => {
      const tour = tours.find((t) => t.id === s.tourId);
      return tour ? { ...s, tour } : null;
    })
    .filter(Boolean);
});

fastify.post('/api/saved', async (request, reply) => {
  const { tourId } = request.body || {};
  if (!tourId) return reply.code(400).send({ error: 'tourId required' });

  const tour = tours.find((t) => t.id === Number(tourId));
  if (!tour) return reply.code(404).send({ error: 'Tour not found' });

  const existing = savedDestinations.find((s) => s.tourId === Number(tourId));
  if (existing) {
    return reply.code(200).send({ saved: true, ...existing, tour });
  }

  const entry = {
    id: savedDestinations.length + 1,
    tourId: Number(tourId),
    savedAt: new Date().toISOString(),
  };
  savedDestinations.push(entry);
  return reply.code(201).send({ saved: true, ...entry, tour });
});

fastify.delete('/api/saved/:tourId', async (request, reply) => {
  const tourId = Number(request.params.tourId);
  const idx = savedDestinations.findIndex((s) => s.tourId === tourId);
  if (idx === -1) return reply.code(404).send({ error: 'Not saved' });
  savedDestinations.splice(idx, 1);
  return { removed: true, tourId };
});

// ---------- Bookings ----------
fastify.post('/api/bookings', async (request, reply) => {
  const { tourId, name, email, phone, date, travelers } = request.body || {};

  if (!tourId || !name || !email || !date || !travelers) {
    return reply.code(400).send({ error: 'Missing required fields' });
  }

  const tour = tours.find((t) => t.id === Number(tourId));
  if (!tour) return reply.code(404).send({ error: 'Tour not found' });

  const booking = {
    id: bookings.length + 1,
    tourId: tour.id,
    tourTitle: tour.title,
    name,
    email,
    phone: phone || '',
    date,
    travelers: Number(travelers),
    total: tour.price * Number(travelers),
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  return reply.code(201).send(booking);
});

fastify.get('/api/bookings', async () => bookings);

fastify.get('/api/bookings/:id', async (request, reply) => {
  const b = bookings.find((x) => x.id === Number(request.params.id));
  if (!b) return reply.code(404).send({ error: 'Booking not found' });
  return b;
});

// ---------- Start ----------
const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
