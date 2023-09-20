import React from 'react';

import { useDispatch } from 'react-redux';
import styles from './CartItem.module.scss';

export const CartItem = ({ _id, title, date, count, clubName, img }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__imgBlock}>
        <img className={styles.cart__img} src={img} alt="Event" />
      </div>
      <div className={styles.cart__item}>
        <div>
          <h3>{date}</h3>
          <h3>{title}</h3>
          <h3>{clubName}</h3>
        </div>
      </div>
      <div className="cart__right">
        <div className="cart__delete"></div>
        <div className="cart__count">
          <b>{count}</b>
        </div>
      </div>
    </div>
  );
};
