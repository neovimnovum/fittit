import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  const {
    opts, action, perform, buttonType, endpoint,
  } = props;
  return (
    <button type="submit" onClick={() => perform(action, opts, endpoint)}>{buttonType}</button>
  );
}

NavButton.propTypes = {
  perform: PropTypes.func,
  buttonType: PropTypes.string,
  action: PropTypes.func.isRequired,
  opts: PropTypes.object.isRequired,
  endpoint: PropTypes.string.isRequired,
};

NavButton.defaultProps = {
  perform: () => console.log('clicked'),
  buttonType: 'Default',
};

export default NavButton;
