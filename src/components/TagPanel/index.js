import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { TagPanel } from './presenter';

function mapStateToProps(state) {
  return {
    terms: state.searchBar.terms
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTermsChange: bindActionCreators(actions.termsUpdate, dispatch)
  };
}

const TagPanelContainer = connect(mapStateToProps, mapDispatchToProps)(TagPanel);

export {
  TagPanelContainer
};
