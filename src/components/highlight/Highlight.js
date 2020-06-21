import React from 'react';
import PropTypes from "prop-types";

const escapeRegExp = (str) => {
  return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

const Highlighted = ({text, highlight, style}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>
  }
  const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi');
  const parts = text.split(regex);

  return (
    <p style={style}>
        {parts.filter(part => part).map((part, i) => (
          regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
    </p>
  )
};

Highlighted.defaultProps = {
  style:null,
  text:'',
  highlight:''
};

Highlighted.propTypes = {
  style:PropTypes.object,
  text:PropTypes.string,
  highlight:PropTypes.string
};

export default Highlighted;
