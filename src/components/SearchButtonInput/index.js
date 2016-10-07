import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { SearchButtonInput } from './presenter';

function mapDispatchToProps(dispatch) {
  return {
    onSearch: bindActionCreators(actions.search, dispatch)
  };
}

const SearchButtonInputContainer = connect(null, mapDispatchToProps)(SearchButtonInput);

export {
  SearchButtonInputContainer
};
