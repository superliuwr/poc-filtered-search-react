import React from 'react';
import { InputMenu } from '../InputMenu';

function SearchTermInput({
  terms = '',
  onTermsChange
}) {
  return (
    <div style={SearchTermInput.styles.div}>
      <InputMenu
        id="terms"
        placeHolder=""
        onChange={(event) => onTermsChange(event.target.value)}
        value={terms}
      />
    </div>
  );
}

SearchTermInput.propTypes = {
  terms: React.PropTypes.string,
  onTermsChange: React.PropTypes.func
};

SearchTermInput.styles = {
  div: {
    display: 'inline-block',
    marginRight: 10
  }
};

export {
  SearchTermInput
};
