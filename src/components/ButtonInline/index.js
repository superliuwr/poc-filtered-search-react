import React from 'react';

function ButtonInline({
  onClick,
  children
}) {
  return (
    <button style={ButtonInline.styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

ButtonInline.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.string
};

ButtonInline.styles = {
  button: {
    padding: 5,
    border: 0,
    width: '15em',
    borderRadius: '0 5px 5px 0',
    textTransform: 'uppercase'
  }
};

export {
  ButtonInline
};
