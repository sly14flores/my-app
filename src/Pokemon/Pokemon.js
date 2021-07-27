import {
    useParams,
} from "react-router-dom";

import capitalizeFirstLetter from '../library/capitalizeFirstLetter'

const Pokemon = ({pokemons}) => {

    const { name } = useParams()

    const index = pokemons.findIndex(p => p.name === capitalizeFirstLetter(name))

    const pokemon = pokemons[index]

    return (
        <div className="mt-10">
            <img className="w-32 mx-auto" src={pokemon.img} alt={pokemon.name} />
        </div>
    )
}

export default Pokemon