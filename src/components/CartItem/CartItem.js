import React from 'react';

import { useDispatch } from 'react-redux';
import styles from './CartItem.module.scss';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import trash from '../../assets/img/trash.svg';
import plus from '../../assets/img/plusBlack.svg';
import minus from '../../assets/img/minus.svg';
import place from '../../assets/img/place.svg';

export const CartItem = ({ _id, title, date, count, clubName, img }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        _id,
      }),
    );
  };
  const onClickMinus = () => {
    dispatch(
      minusItem({
        _id,
      }),
    );
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove this event?')) {
      dispatch(
        removeItem({
          _id,
        }),
      );
    }
  };
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__imgBlock}>
        <img className={styles.cart__img} src={img} alt="Event" />
      </div>

      <div className={styles.cart__info}>
        <h3 className={styles.cart__date}>{date}</h3>
        <h3 className={styles.cart__title}>{title}</h3>
        <div className={styles.cart__club}>
          <img src={place} alt="place" />
          <h3 className={styles.cart__clubName}>{clubName}</h3>
        </div>
      </div>

      <div className={styles.cart__right}>
        <div className={styles.cart__count}>
          <div className={styles.cart__countImg} onClick={onClickPlus}>
            <img className={styles.cart__plus} src={plus} alt="plus" />
          </div>
          <p>{count}</p>
          <div className={styles.cart__countImg} onClick={onClickMinus}>
            <img src={minus} alt="minus" />
          </div>
        </div>
        <div onClick={onClickRemove} className={styles.cart__delete}>
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
};
