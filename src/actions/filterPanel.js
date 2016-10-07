import * as actionTypes from '../constants/actionTypes';

export function venueTypesUpdate(venueType) {
  return {
    type: actionTypes.VENUE_TYPES_UPDATE,
    venueType
  };
}
