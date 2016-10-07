import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function search(state) {
  // TODO replace with API call
  return Object.assign({}, state, {
    result: [{
      id: 1,
      name: 'Venue 1'
    }, {
      id: 2,
      name: 'Venue 2'
    }, {
      id: 3,
      name: 'Venue 3'
    }]
  });
}

function termsUpdate(state, terms) {
  return Object.assign({}, state, {
    terms
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH:
      return search(state);
    case actionTypes.TERMS_UPDATE:
      return termsUpdate(state, action.terms);
    default:
      return state;
  }
}
