import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface PokemonsState{
    [key:string] : SimplePokemon
}

const getInitialState = ():PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons')?? '{}' )

  return favorites
}

const initialState = {
  ...getInitialState()
  //  '1':{id:'1', name: 'bulbasour'},
  //  '3':{id:'3', name: 'bulbasour'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    toggleFavorite (state, action:PayloadAction<SimplePokemon>){
        
        const pokemon = action.payload;
        const {id} = pokemon

        if(!!state[id]){
            delete state[id];
            return
        } else {
          state[id] = pokemon;
        }

        localStorage.setItem('favorite-pokemons', JSON.stringify(state))
    }


  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer