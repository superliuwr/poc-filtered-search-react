import * as actionTypes from '../constants/actionTypes';

export function search() {
  return {
    type: actionTypes.SEARCH
  };
}

export function termsUpdate(terms) {
  return {
    type: actionTypes.TERMS_UPDATE,
    terms
  };
}
