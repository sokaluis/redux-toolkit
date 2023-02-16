import { createSelector } from "@reduxjs/toolkit";

const pokemonSelect = (state) => state;

export const pokemonSelector = createSelector(pokemonSelect, state => state.pokemon);