import { createMovie } from '../moks/movies-moks.js';

const MOVIES_COUNT = 20;

export default class MoviesModel {
  #movies = Array.from({length: MOVIES_COUNT}, createMovie);

  get movies() {
    return this.#movies;
  }
}