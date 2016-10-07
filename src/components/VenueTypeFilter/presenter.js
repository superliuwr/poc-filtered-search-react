import React from 'react';

function VenueTypeFilter({
  venueTypes = [],
  onToggle
}) {
  return (
    <div style={VenueTypeFilter.styles.div}>
      <button
        value="Restaurant"
        onClick={(event) => onToggle(event.target.value)}
      >Restaurant</button>
      <button
        value="Cafe"
        onClick={(event) => onToggle(event.target.value)}
      >Cafe</button>
      <button
        value="Bar"
        onClick={(event) => onToggle(event.target.value)}
      >Bar</button>
      <button
        value="Pub"
        onClick={(event) => onToggle(event.target.value)}
      >Pub</button>
    </div>
  );
}

VenueTypeFilter.propTypes = {
  venueTypes: React.PropTypes.array,
  onToggle: React.PropTypes.func
};

VenueTypeFilter.styles = {
  div: {
    display: 'inline-block',
    marginRight: 10,
    width: '33.3%'
  },
  button: {
    display: 'block'
  }
};

export {
  VenueTypeFilter
};
