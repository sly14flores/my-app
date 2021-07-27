import Pokemon from './Pokemon'
import capitalizeFirstLetter from '../library/capitalizeFirstLetter'

import {
    Link,
    Route,
    Switch,
    useParams,
    useRouteMatch
} from "react-router-dom";

const PokemonTypes = ({pokemons}) => {

    const { type } = useParams()
    const { path, url } = useRouteMatch()

    const display = pokemons.filter(pokemon =>
        pokemon.types.includes(capitalizeFirstLetter(type))
    ).map(({name, img, types}, i) => {
            return (
                <div key={i}>
                    <div className="border border-green-600">{name}</div>
                    <div className="border border-green-600">
                        <Link to={`${url}/${name.toLowerCase()}`}>
                            <img className="w-32 mx-auto" src={img} alt={name} />
                        </Link>
                    </div>
                    <div className="border border-green-600">{types.join(" ")}</div>
                </div>
            )
        }
    )

    return (
        <Switch>
            <Route exact path={path}>{display}</Route>
            <Route path={`${path}/:name`}><Pokemon pokemons={pokemons} /></Route>
        </Switch>
    )
}

export default PokemonTypes