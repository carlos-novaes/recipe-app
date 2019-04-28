import React, { Component } from 'react';
import API_KEY from '../config';

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    console.log(this.props);
    return <div className='container' />;
  }
}

export default Recipe;
