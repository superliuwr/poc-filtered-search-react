import React from 'react';

function TagPanel({
  terms = '',
  onTermsChange
}) {
  return (
    <div style={TagPanel.styles.div}>
      <span>{terms}</span>
      <a
        style={TagPanel.styles.a}
        onClick={(event) => onTermsChange(event.target.value)}
      >x</a>
    </div>
  );
}

TagPanel.propTypes = {
  terms: React.PropTypes.string,
  onTermsChange: React.PropTypes.func
};

TagPanel.styles = {
  div: {
    marginTop: '1em',
    textAlign: 'center'
  },
  a: {
    marginLeft: '0.25em'
  }
};

export {
  TagPanel
};
