import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/thunks';
import { pokemonSelector } from './store/selectors';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'Cargando...' : 'Cargado.'}</span>
      {!isLoading && (
        <>
          <ul>
            {pokemons.map(({ name }) => (
              <li
                style={{
                  color: 'white',
                }}
              >
                {name}
              </li>
            ))}
          </ul>
          <p>Página: {page}</p>
          <button
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
          >
            Next
          </button>
        </>
      )}
    </>
  );
};
