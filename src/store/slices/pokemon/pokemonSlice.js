import { createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '../../thunks';

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemon: (state, /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      }).addCase(getPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload.pokemons;
        state.page = action.payload.page;
      });
  }
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;