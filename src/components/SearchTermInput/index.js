import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { SearchTermInput } from './presenter';

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

const SearchTermInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchTermInput);

export {
  SearchTermInputContainer
};
