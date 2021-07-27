import Pokemons from "./Pokemon/Pokemons"
import PokemonTypes from './Pokemon/PokemonTypes'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const PokemonApp = () => {

    const pokemons = [
        {
          id: "#001",        
          name: "Bulbasaur",
          img: "https://img.pokemondb.net/artwork/vector/large/bulbasaur.png",
          types: ["Grass","Poison"]
        },
        {
          id: "#002",
          name: "Ivysaur",
          img: "https://img.pokemondb.net/artwork/vector/large/ivysaur.png",
          types: ["Grass","Poison"]
        },
        {
          id: "#003",
          name: "Venusaur",
          img: "https://img.pokemondb.net/artwork/vector/large/venusaur.png",
          types: ["Grass","Poison"]
        },
        {
          id: "#004",
          name: "Charmander",
          img: "https://img.pokemondb.net/artwork/vector/large/charmander.png",
          types: ["Fire"]
        },
        {
          id: "#005",
          name: "Charmeleon",
          img: "https://img.pokemondb.net/artwork/vector/large/charmeleon.png",
          types: ["Fire"]
        },
        {
          id: "#006",
          name: "Charizard",
          img: "https://img.pokemondb.net/artwork/vector/large/charizard.png",
          types: ["Fire"]
        },  
        {
          id: "#007",
          name: "Squirtle",
          img: "https://img.pokemondb.net/artwork/vector/large/squirtle.png",
          types: ["Water"]
        },
        {
          id: "#062",
          name: "Poliwrath",
          img: "https://img.pokemondb.net/artwork/vector/large/poliwrath.png",
          types: ["Water"]
        },
        {
          id: "#091",
          name: "Cloyster",
          img: "https://img.pokemondb.net/artwork/vector/large/cloyster.png",
          types: ["Water"]
        },
    ]
      
    const routes = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Grass",
            to: "/types/grass",
        },
        {
            name: "Poison",
            to: "/types/poison",
        },
        {
            name: "Fire",
            to: "/types/fire",
        },
        {
            name: "Water",
            to: "/types/water",
        },
    ]

    return (
        <Router>
            <div className="w-44 mx-auto flex flex-col">
                {
                    routes.map(({name, to},i) =>
                        <Link className="border-green-600" to={to} key={i}>{name}</Link>
                    )
                }
            </div>
            <Switch>
                <Route exact path="/" children={<Pokemons pokemons={pokemons} />} />
                <Route path="/types/:type" children={<PokemonTypes pokemons={pokemons} />} />
            </Switch>
        </Router>
    )

}

export default PokemonApp