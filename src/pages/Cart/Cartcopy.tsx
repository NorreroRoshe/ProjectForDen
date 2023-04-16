import React from 'react';
import s from './Cart.module.scss';
import { WayToBack } from '../../components/WayToBack/WayToBack';
import { useDispatch, useSelector } from 'react-redux';
import CartItemBlock from './CartItemBlock';
import CartTotal from './CartTotal';
import CartEmpty from './CartEmpty';
import { selectCart } from '../../components/redux/cart/selectors';
import { clearItems } from '../../components/redux/cart/slice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину ???')) {
      dispatch(clearItems());
    }
  };

  if (items.length === 0) {
    //Если totalPrice = 0 или totalCount = 0, то пустая корзина
    return <CartEmpty />;
  }

  return (
    <section className={s.section_cart}>
      <div className={`${s.cart_container} ${s.container}`}>
        <div className={s.cart_header}>
          <h3 className={s.cart_title}>СОСТАВ ЗАКАЗА</h3>
          <div onClick={() => {}} className={s.cart_clear}>
            <span onClick={onClickClear} className={s.cart_clear_desc}>
              Очистить корзину
            </span>
          </div>
        </div>
        <div className={s.cart_root}>
          <div className={s.cart_root_border}>
            {items.map((item: any) => (
              <CartItemBlock key={item.id} {...item} />
            ))}
          </div>
          <div className={s.cart_root_border}>
            <CartTotal />
          </div>
          <p className={s.cart_root_desc}>
            Напоминаем: окончательная цена уточняется у менеджера. Итоговый размер скидки товара
            может быть изменён.
          </p>
          <div className={s.root_main_submit}>
            <button className={s.root_main_btn}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
