import {
  combineReducers
} from 'redux';
import searchBar from './searchBar';
import filterPanel from './filterPanel';

export default combineReducers({
  searchBar,
  filterPanel
});
