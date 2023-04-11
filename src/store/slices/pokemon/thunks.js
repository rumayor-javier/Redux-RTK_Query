import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`);
        // const data = await response.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}