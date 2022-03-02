import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  const { perform, buttonType } = props;
  return (
    <button type="submit" onClick={perform}>{buttonType}</button>
  );
}

NavButton.propTypes = {
  perform: PropTypes.func,
  buttonType: PropTypes.string,
};

NavButton.defaultProps = {
  perform: () => console.log('clicked'),
  buttonType: 'Default',
};

export default NavButton;
