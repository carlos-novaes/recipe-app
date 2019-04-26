import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY = '32c12dc9f661f83ab7d852b030685e1c';

class App extends Component {
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`
    );

    const data = await api_call.json();
    console.log(data.recipes[0].recipe_id);
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
