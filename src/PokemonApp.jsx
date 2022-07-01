import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Core
import { getPokemons } from "./store/thunks";

const PokemonApp = () => {
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"}</span>
      <ul>
        {pokemons.map(({ name, url }) => (
          <li key={name}>
            <a href={url} target="_blank">
              {name}
            </a>
          </li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};

export default PokemonApp;
