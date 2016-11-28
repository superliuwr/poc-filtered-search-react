import React from 'react';

function InputMenu({
  id,
  value,
  onChange,
  placeholder
}) {
  return (
    <input
      id={id}
      type="text"
      style={InputMenu.styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

InputMenu.propTypes = {
  id: React.PropTypes.string,
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
