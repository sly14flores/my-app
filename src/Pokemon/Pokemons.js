const Pokemons = ({pokemons}) => {

    return (
        <table className="text-center w-1/2 mx-auto border-collapse border border-green-800">
            <thead>
                <tr>
                    <th className="border border-green-600 py-3">Name</th>
                    <th className="border border-green-600 py-3">Image</th>
                    <th className="border border-green-600 py-3">Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokemons.map(({id, name, img, types}, i) => {
                            return (
                                <tr key={id}>
                                    <td className="border border-green-600">{name}</td>
                                    <td className="border border-green-600"><img className="w-32 mx-auto" src={img} alt={name} /></td>
                                    <td className="border border-green-600">{types.join(" ")}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )    

}    

export default Pokemons