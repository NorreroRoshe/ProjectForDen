import { Link } from 'react-router-dom';
import Carzinka from '../../assets/img/social_icon/cart-4-svgrepo-com.svg'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../components/redux/cart/selectors';

function HeaderCartCount() {
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <Link to="/cart" className="header__signin-desc button button--cart">
      <img src={Carzinka} alt="Иконка корзины" className='button--cart_icon'/>
      <span>{totalCount}</span>
      <div className="button__delimiter"></div>
      <span>{totalPrice} ₽</span>
    </Link>
  );
}

export default HeaderCartCount;
