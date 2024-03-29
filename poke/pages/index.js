import Link from 'next/link'

const Pokemon = ({pokemon}) => {
  const pokeId = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li>
      <Link href={`/pokemones/${pokeId}`}>{pokemon.name}</Link>

    </li>
  )
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemon151</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
      </ul>
    </div>
  )
}
export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return {
    props: {
      pokemones: data.results
    }
  }
}