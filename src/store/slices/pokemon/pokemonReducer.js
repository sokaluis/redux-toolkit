import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

const startLoading = createAction('pokemon/loading');
const setPokemons = createAction('pokemon/set');

export const pokemonReducer = createReducer(initialState, (builder) => {
  builder.addCase(startLoading, (state) => state.isLoading = true);
  builder.addCase(setPokemons, (state, action) => {
    state.isLoading = false;
    state.page = action.payload.page;
    state.pokemons = action.payload.pokemons;
  });
});
