import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";



export const metadata = {
    title: 'Favoritos',
    description: 'Esta es la página de favoritos'
}



export default async function PokemonsPage() {

  
  
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pókemons Favoritos <small className = 'text-blue-500'>Global State</small></span>
      
      {/*<PokemonGrid pokemons={ [] } />*/}
      <FavoritePokemons />

    </div>
  );
}


