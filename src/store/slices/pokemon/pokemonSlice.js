import { createSlice } from '@reduxjs/toolkit';

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
      console.log(action);
    }
  }
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;