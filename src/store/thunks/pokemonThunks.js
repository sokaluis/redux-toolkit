import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPokemons } from "../slices/pokemon";
import { pokemonApi } from "../../services";

export const getPokemonsBasic = (page = 0) =>
  async (dispatch) => {
    dispatch(startLoadingPokemon());

    const data = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };

export const getPokemons = createAsyncThunk('pokemon/fetchPokemons', async (page = 0) => {
  const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
  return {
    pokemons: response.data.results,
    page: page + 1
  };
})

