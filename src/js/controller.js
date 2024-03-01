import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg'; // Parcel 1

import 'core-js/stable'; // Polyplhilling everything else
import 'regenerator-runtime/runtime'; //polyphilling Async Await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
//same shit prettier
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
