import React from 'react';
import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <div>
      <h2>Cart is Empty!</h2>
      <Link to={'/'}>Back</Link>
    </div>
  );
}

export default CartEmpty;
