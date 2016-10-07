import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function venueTypesUpdate(state, venueType) {
  const venueTypes = state.venueTypes || [];
  const pos = venueTypes.indexOf(venueType);
  if (pos !== -1) {
    venueTypes.splice(pos, 1);
  } else {
    venueTypes.push(venueType);
  }

  return Object.assign({}, state, {
    venueTypes
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.VENUE_TYPES_UPDATE:
      return venueTypesUpdate(state, action.venueType);
    default:
      return state;
  }
}
