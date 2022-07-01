import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./query";
import { counterSlice, pokemonSlice } from "./slices";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
