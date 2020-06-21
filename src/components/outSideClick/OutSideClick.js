import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const WithOutsideClick = ({ children, closeDropdown, className }) => {
  const node = useRef();

  const handleClick = (e) => {
    if (!(node.current && node.current.contains(e.target))) {
      closeDropdown();
    }
  };
  const escButtonHandling= (e) =>{
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeDropdown()
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('keydown', escButtonHandling);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('keydown', escButtonHandling);
    };
  }, []);

  return (
    <div
      className={className || 'overlay'}
      ref={(r) => {
        node.current = r;
      }}
    >
      {children}
    </div>
  );
};

WithOutsideClick.defaultProps = {
  className: ''
};

WithOutsideClick.propTypes = {
  children: PropTypes.any.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default WithOutsideClick;
