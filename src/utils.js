import { FILTER_TYPE } from './const.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const filters = {
  [FILTER_TYPE.ALL]: (movies) => [...movies],
  [FILTER_TYPE.WATCHLIST]: (movies) => movies.filter((movie) => movie.userDetails.watchlist),
  [FILTER_TYPE.HISTORY]: (movies) => movies.filter((movie) => movie.userDetails.alreadyWatched),
  [FILTER_TYPE.FAVORITES]: (movies) => movies.filter((movie) => movie.userDetails.favorite)
};

const SECOND_PER_MINUTE = 60;
const MILISECOND_PER_SECOND = 1000;

const getDateFormate = (date, dateFormate) => dayjs(date).format(dateFormate);
const durationMovies = (minute, format) => dayjs.duration(SECOND_PER_MINUTE * minute * MILISECOND_PER_SECOND).format(format);

const diffDate = (dateA, dateB) => dayjs(dateB).diff(dayjs(dateA));
export { diffDate, filters, getDateFormate, durationMovies};
