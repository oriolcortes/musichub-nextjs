'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';

const FavoritesContext = createContext(null);

const STORAGE_KEY = 'musichub:favorites';

// Reducer para gestionar la lista de favoritos
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'INIT_FROM_STORAGE': {
      // payload: array de ids
      return Array.isArray(action.payload) ? action.payload : state;
    }
    case 'TOGGLE_FAVORITE': {
      const songId = action.payload;
      // Si ya está, lo quitamos; si no está, lo añadimos
      if (state.includes(songId)) {
        return state.filter((id) => id !== songId);
      }
      return [...state, songId];
    }
    default:
      return state;
  }
}

// Provider del contexto
export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  // Inicializar desde localStorage al montar
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        dispatch({ type: 'INIT_FROM_STORAGE', payload: parsed });
      }
    } catch (error) {
      console.error('Error leyendo favoritos desde localStorage:', error);
    }
  }, []);

  // Persistir en localStorage cuando cambie favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error guardando favoritos en localStorage:', error);
    }
  }, [favorites]);

  // API que expondremos por contexto
  const value = {
    favorites, // array de ids
    toggleFavorite: (songId) =>
      dispatch({ type: 'TOGGLE_FAVORITE', payload: songId }),
    isFavorite: (songId) => favorites.includes(songId),
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook de conveniencia para usar el contexto
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error(
      'useFavorites debe usarse dentro de un <FavoritesProvider>.'
    );
  }
  return ctx;
}
