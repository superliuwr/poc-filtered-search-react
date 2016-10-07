import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { VenueTypeFilter } from './presenter';

function mapStateToProps(state) {
  return {
    venueTypes: state.filterPanel.venueTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggle: bindActionCreators(actions.venueTypesUpdate, dispatch)
  };
}

const VenueTypeFilterContainer = connect(mapStateToProps, mapDispatchToProps)(VenueTypeFilter);

export {
  VenueTypeFilterContainer
};
