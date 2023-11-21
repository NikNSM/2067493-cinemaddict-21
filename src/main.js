import Presenter from '../src/presenter/presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import MoviesModel from './model/movies-model.js';
import { generateFilters } from './moks/filter-moks.js';

const containerInfoUser = document.querySelector('.header');
const contentContainer = document.querySelector('.main');
const containerNumberOfFilms = document.querySelector('.footer__statistics');
const body = document.querySelector('body');

const moviesModel = new MoviesModel ();
const filters = generateFilters(moviesModel.movies);

const filterPresenter = new FilterPresenter ({
  filters,
  container: contentContainer
});

const presenter = new Presenter ({containerInfoUser, contentContainer,
  containerNumberOfFilms, moviesModel, body});

presenter.init();
filterPresenter.init();

