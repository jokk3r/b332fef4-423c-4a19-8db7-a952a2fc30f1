import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { useSelector } from 'react-redux';
import cart from '../../assets/img/cart.svg';

const Header = ({ searchValue, setSearchValue }) => {
  const { items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.header}>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={styles.header__cart}>
        <Link to="/cart" className="button__cart">
          <img src={cart} alt="cart" />
          <div className={styles.header__cartCount}>
            <span>{totalCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
