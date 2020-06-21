import React, { useEffect, useState, useRef } from 'react';

import { URL } from '../../constants';
import {debounce, isStringPresentInElement} from "../../utils/helper";
import SearchList from "../seachList/SearchList";
import WithOutsideClick from "../outSideClick/OutSideClick";

import('./searchBar.scss');

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  const [showList, setShowList] = useState(false);
  const [pointer, setPointer] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const activeItem = useRef(null);


  useEffect(() => {
    fetch(URL)
      .then(results => results.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);


  const filterUser = input => {
    return users.filter((user) => {
      const keys = Object.keys(user);
      return keys.some(key => {
        if (typeof user[key] !== 'object') {
          return isStringPresentInElement(user[key], input);
        }
        return  (user[key].some(item =>isStringPresentInElement(item, input)));
      });
    });
  };

  const ensureActiveItemVisible =()=> {
    if (activeItem.current) {
      activeItem.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    console.log('after updating', pointer, activeItem);
  };

  const searchAndShowList = (value) =>{
    setShowList(true);
    setLists(filterUser(value));
  };

  const search = debounce(searchAndShowList, 300);

  const handleChange = (value) => {
    if(value){
      setInputValue(value);
      search(value);
    }else if(value === '') {
      setInputValue(value);
      setShowList(false);
      setLists([]);
    }
  };

  const updatePointer = e => {
    if(e.keyCode === 40){
      if(pointer < lists.length-1){
        setPointer(pointer + 1);
      }else if(pointer === lists.length - 1){
        setPointer(-1);
      }
    }else if(e.keyCode === 38){
      if(pointer > -1){
        setPointer(pointer - 1);
      }else if(pointer === -1){
        setPointer(0);
      }
    }
  };
  return (
    <WithOutsideClick
      closeDropdown={() => {
        setShowList(false)
      }}
    >
      <div className="field-container" aria-haspopup="listbox"
           role="combobox"
           aria-owns="suggestionContainer"
           aria-expanded={showList}
           id="autoSuggestWrapper"
      >
        <input
          type="text"
          className="search-input"
          dataTestId="searchInput"
          placeholder="Search User By Id, address, name,items, pincode"
          onChange={(e)=>handleChange(e.target.value)}
          onKeyDown={updatePointer}
          onKeyUp={ensureActiveItemVisible}
          value={inputValue}
        />
        {inputValue && <button onClick={()=>handleChange('')} className="close-icon">&#10005;</button>}
        {showList && (
          <SearchList setPointer={setPointer} pointer={pointer} lists={lists} input={inputValue} activeItem={activeItem} />
        )}
      </div>
    </WithOutsideClick>
  );
};

export default SearchBar;
