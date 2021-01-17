import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

//OPTION 1

// class PokemonCollection extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Card.Group itemsPerRow={6}>
//         <h1>Hello From Pokemon Collection</h1>
//         {this.props.pokemons.map(pokemon => {
//           return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
//         })}
//       </Card.Group>
//     );
//   }
// }

  const PokemonCollection = ({pokemons}) => {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemons.map(pokemon => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </Card.Group>
  );
};

export default PokemonCollection;
