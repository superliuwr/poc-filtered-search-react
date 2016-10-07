import React from 'react';
import { SearchTermInputContainer } from '../SearchTermInput';
import { SearchButtonInputContainer } from '../SearchButtonInput';

function SearchBarContainer() {
  return (
    <div style={SearchBarContainer.styles.div}>
      <SearchTermInputContainer />
      <SearchButtonInputContainer />
    </div>
  );
}

SearchBarContainer.styles = {
  div: {
    textAlign: 'center',
    marginTop: 10
  }
};

export {
  SearchBarContainer
};
