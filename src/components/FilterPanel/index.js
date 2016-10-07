import React from 'react';
import { VenueTypeFilterContainer } from '../VenueTypeFilter';

function FilterPanelContainer() {
  return (
    <div style={FilterPanelContainer.styles.div}>
      <VenueTypeFilterContainer />
    </div>
  );
}

FilterPanelContainer.styles = {
  div: {
    marginTop: 10
  }
};

export {
  FilterPanelContainer
};
