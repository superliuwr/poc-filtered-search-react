import React from 'react';

function InputMenu({
  value,
  onChange,
  placeholder
}) {
  return (
    <input
      type="text"
      style={InputMenu.styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

InputMenu.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string
};

InputMenu.styles = {
  input: {
    width: '25em',
    borderRadius: '5px 0 0 5px',
    padding: 5
  }
};

export {
  InputMenu
};
