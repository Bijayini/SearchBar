import React from "react";
import PropTypes from 'prop-types';

import {  isStringPresentInElement } from "../../utils/helper";
import Highlight from "../highlight/Highlight";

import('./searchList.scss');

const getItemText = (items, input) => {
  if(!input){
    return '';
  } else if (items.some(item =>isStringPresentInElement(item, input))) {
    return <p className="suggestion-item"><mark>&ldquo;{input}&rdquo;</mark> found in items</p>;
  }
  return '';
};

const SearchList = ({lists, pointer, activeItem, setPointer, noResultFound, input}) => {
  return (
    <ul role="listbox" className="suggestion-container" dataTestId="searchList">
      {lists.length ? lists.map((list, index) => {
        const item = getItemText(list.items, input);
        return (
          <li
            key={list.id}
            ref={index === pointer ? activeItem : null}
            className={index === pointer ? 'suggestion active' : 'suggestion'}
            role="option"
            id={index === pointer ? 'suggestionActive' : 'suggestion'}
            onMouseEnter={() => setPointer(index)}
            onMouseLeave={() => setPointer(-1)}
          >
            <Highlight highlight={input} text={list.id.toUpperCase()} style={{fontSize: '14px',
              fontWeight: 700}} />
            {list.name && <Highlight highlight={input} text={list.name} style={{ fontSize: '13px',
              fontStyle: 'italic'}}/>}
            {list.items.length && item }
            <Highlight highlight={input} text={`${list.address}, ${list.pincode}`} />
          </li>)}) : <li className="no-suggestion">{noResultFound}</li>
        }
    </ul>
  )
};

SearchList.defaultProps = {
  activeItem:null,
  input:'',
  noResultFound:'No  User Found'
};

SearchList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      address:PropTypes.string.isRequired,
      pincode:PropTypes.string.isRequired,
      items:PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  pointer:PropTypes.number.isRequired,
  activeItem:PropTypes.object,
  setPointer:PropTypes.func.isRequired,
  input:PropTypes.string,
  noResultFound:PropTypes.string
};

export default SearchList;
