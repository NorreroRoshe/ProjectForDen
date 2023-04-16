import React from 'react';
import s from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { selectCart } from '../../components/redux/cart/selectors';

const CartTotal: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className={`${s.root_main} ${s.root_main_sh}`}>
      <div
        className={`${s.root_main_right} ${s.root_main_prices_total} ${s.root_main_prices_total_st}`}>
        <div className={`${s.root_main_prices} ${s.prices_total_fb} ${s.prices_total_st}`}>
          <h4 className={s.cart_title_total}>Всего позиций: </h4>
          <div className={`${s.root_main_price} ${s.root_main_price_total}`}>
            <span className={`${s.price_desc} ${s.price_desc_total} ${s.price_desc_totals}`}>
              {totalCount} шт.
            </span>
          </div>
        </div>
        <div className={`${s.root_main_prices} ${s.prices_total_fb} ${s.prices_total_fbs}`}>
          <h4 className={s.cart_title_total}>Итого: </h4>
          <div className={`${s.root_main_price} ${s.root_main_price_total}`}>
            <span className={`${s.price_discount} ${s.price_discount_total}`}>8 950 ₽.</span>
            <span className={`${s.price_desc} ${s.price_desc_total}`}>
              {totalPrice} <span>₽.</span>
            </span>
            <span className={s.price_econom_total}>Экономия 568 ₽.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
