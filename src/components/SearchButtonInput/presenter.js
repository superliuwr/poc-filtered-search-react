import React from 'react';
import { ButtonInline } from '../ButtonInline';

function SearchButtonInput({
  onSearch
}) {
  return (
    <div style={SearchButtonInput.styles.div}>
      <ButtonInline
        onClick={() => onSearch()}
      >Find a place to eat</ButtonInline>
    </div>
  );
}

SearchButtonInput.propTypes = {
  onSearch: React.PropTypes.func
};

SearchButtonInput.styles = {
  div: {
    display: 'inline-block'
  }
};

export {
  SearchButtonInput
};
