import { createContext, useContext, useEffect, useState } from 'react';
import { api } from './api.js';

const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const list = await api.getSaved();
      setSavedIds(list.map((s) => s.tourId));
    } catch (e) {
      console.error('Failed to load saved:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const isSaved = (tourId) => savedIds.includes(Number(tourId));

  const toggleSave = async (tourId) => {
    const id = Number(tourId);
    if (isSaved(id)) {
      setSavedIds((prev) => prev.filter((x) => x !== id));
      try {
        await api.unsaveDestination(id);
      } catch (e) {
        // revert on failure
        setSavedIds((prev) => [...prev, id]);
        throw e;
      }
    } else {
      setSavedIds((prev) => [...prev, id]);
      try {
        await api.saveDestination(id);
      } catch (e) {
        setSavedIds((prev) => prev.filter((x) => x !== id));
        throw e;
      }
    }
  };

  return (
    <SavedContext.Provider value={{ savedIds, isSaved, toggleSave, loading, refresh }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error('useSaved must be used inside SavedProvider');
  return ctx;
}
