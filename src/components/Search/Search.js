import React, { useRef, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import style from './Search.module.scss';

import iconSearch from '../../assets/img/Search.svg';

export const Search = ({ searchValue, setSearchValue }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.search}>
      <img className={style.icon__search} src={iconSearch} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Looking for Event..."
      />
      {searchValue && (
        <p className={style.icon__close} onClick={() => onClickClear()}>
          X
        </p>
      )}
    </div>
  );
};
