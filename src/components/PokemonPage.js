import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          pokemons,
        });
      });
  }

  handleSearch = input => {
    return this.setState({
      searchInput: input,
    });
  };

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] });
  };

  render() {
    const choosenPokemon = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchInput);
    });
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={choosenPokemon} />
      </Container>
    );
  }
}

export default PokemonPage;
