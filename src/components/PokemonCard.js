import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const {
      id,
      name,
      hp,
      sprites: { front, back },
    } = this.props.pokemon;
    return (
      <Card>
        <div key={id}>
          <div className='image'>
            {!this.state.clicked ? (
              <img alt={name} src={front} onClick={this.handleClick} />
            ) : (
              <img alt={name} src={back} onClick={this.handleClick} />
            )}
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
