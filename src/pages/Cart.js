import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem/CartItem';
import { clearItems } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import left from '../assets/img/left.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const onClickRemoveAll = () => {
    if (window.confirm('Are you sure you want to remove all items?')) {
      dispatch(clearItems());
    }
  };
  if (items.length === 0) {
    return <CartEmpty />;
  }
  return (
    <div className="container">
      <div className="cart">
        <div className="cart__main">
          <div className="cart__header">
            <Link className="button__back " to="/">
              <img src={left} alt="back" />
            </Link>
            <h2 className="cart__title"> Cart</h2>
          </div>
          <div className="cart__deleteAll">
            <p onClick={onClickRemoveAll}>delete all</p>
          </div>
        </div>
        <div className="cart__items">
          {items.map((item) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>
        <div className="cart__bottom"></div>
      </div>
    </div>
  );
};

export default Cart;
