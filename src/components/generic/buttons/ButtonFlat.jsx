import React from 'react';
import PropTypes from 'prop-types';

const ButtonFlat = ({label, style, className, onClick, id}) => {
  let classname = "md-btn md-flat " + className;
  return (
    <button id={id} className={classname} style={style} onClick={onClick}>{label}</button>
  )
}

ButtonFlat.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonFlat;
