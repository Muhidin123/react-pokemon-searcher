import React from "react";
import { Form } from "semantic-ui-react";
import Fetch from "./Fetch";
const fetchReq = new Fetch();

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hp: 0,
      sprites: {
        front: "",
        back: "",
      },
    };
  }

  handleSubmit = e => {
    fetchReq
      .generalFetch(
        "http://localhost:3000/pokemon",
        fetchReq.makeOptions("POST", e)
      )
      .then(pokemon => {
        this.props.addPokemon(pokemon);
      });
  };
  handleChange = e => {
    e.target.name !== "front" && e.target.name !== "back"
      ? this.setState({
          [e.target.name]: e.target.value,
        })
      : this.setState({
          sprites: {
            ...this.state.sprites,
            [e.target.name]: e.target.value,
          },
        });
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.state);
          }}
        >
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='Name'
              placeholder='Name'
              name='name'
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <Form.Input
              fluid
              label='hp'
              placeholder='hp'
              name='hp'
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <Form.Input
              fluid
              label='Front Image URL'
              placeholder='url'
              name='front'
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <Form.Input
              fluid
              label='Back Image URL'
              placeholder='url'
              name='back'
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
