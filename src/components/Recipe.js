import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { image_url, title, publisher, source_url } = this.state.activeRecipe;
    return (
      <div className='container'>
        {this.state.activeRecipe.length === 0 ? null : (
          <div className='active-recipe'>
            <img className='active-recipe__img' src={image_url} alt={title} />
            <h3 className='active-recipe__title'>{title}</h3>
            <h4 className='active-recipe__publisher'>
              Publisher: <span>{publisher}</span>
            </h4>
            <p className='active-recipe__website'>
              Recipe:
              <span>
                <a href={source_url}>{source_url}</a>
              </span>
            </p>
            <button className='active-recipe__button'>
              <Link to='/'>Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
