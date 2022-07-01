import { pokemonApi } from "../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "../slices";

export const getPokemons =
  (page = 0) =>
  async (dispatch, getState) => {
    const { pokemons } = getState().pokemons;
    dispatch(startLoadingPokemons());

    // // Using Fetch
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    // Using Axios
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(
      setPokemons({
        pokemons: [...pokemons, ...data.results],
        page: page + 1,
      })
    );
  };
