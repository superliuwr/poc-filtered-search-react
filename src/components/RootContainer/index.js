import React from 'react';
import { SearchBarContainer } from '../SearchBar';
import { TagPanelContainer } from '../TagPanel';
import { FilterPanelContainer } from '../FilterPanel';

function RootContainer() {
  return (
    <div style={RootContainer.styles.div}>
      <SearchBarContainer />
      <TagPanelContainer />
      <FilterPanelContainer />
    </div>
  );
}

RootContainer.styles = {

};

export {
  RootContainer
};
