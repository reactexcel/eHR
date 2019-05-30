import React from 'react';
import PropTypes from 'prop-types';

const ButtonInfo = ({label, style, className, onClick}) => {
  let classname = "btn btn-info " + className;
  return (
    <button className={classname} style={style} onClick={onClick}>{label}</button>
  )
}

ButtonInfo.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonInfo;
