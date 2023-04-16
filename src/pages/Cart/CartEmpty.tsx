import React from 'react';
import emptyCartImg from '../../assets/img/empty_cart.svg';
import { useNavigate } from 'react-router-dom';
import s from './Cart.module.scss';

const CartEmpty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${s.container} ${s.container__cart}`}>
        <div className={`${s.cart} ${s.cart__empty}`}>
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы ещё не заказали стильный светильник или еще что : )
            <br />
            Для того, чтобы совершить покупку, перейдите на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <button onClick={() => navigate(-1)} className={`${s.button} ${s.button__black}`}>
            <span>Вернуться назад</span>
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default CartEmpty;
