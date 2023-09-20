import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="container ">
      <div className="cart">
        <div className="cart__main">
          <h2 className="cart__title"> Cart</h2>
          {/*  <div onClick={onClickClear} className="cart__clear">
          <img src={cross} alt="clear all items" />
          <span>Clear all</span>
        </div> */}
        </div>
        <div className="content__items">
          {items.map((item) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details"></div>
          <div className="cart__buttons">
            <div className="button button__pay">
              <span>Pay now</span>
            </div>
            <Link className="button  button__back " to="/">
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
