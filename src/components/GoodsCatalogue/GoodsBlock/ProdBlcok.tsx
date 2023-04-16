import React from 'react';
import { Link } from 'react-router-dom';
import s from '../GoodsCatalogue.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';

type ProdBlockProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  articl: string;
};

export const ProdBlock: React.FC<ProdBlockProps> = ({ id, name, price, imageUrl, articl }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      articl,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
      <li className={s.allproduct_goods_item}>
        <Link key={id} to={`/product/${id}`} className={s.allproduct_goods_link}>
          <span className={s.allproduct_goods_box}>
            <img src={imageUrl} alt="" className={s.allproduct_goods_img} />
          </span>
          <p className={s.allproduct_goods_artikul}>{articl}</p>
          <h4 className={s.allproduct_goods_header}>{name}</h4>
        </Link>
        <div className={s.allproduct_goods_activity}>
          <p className={s.goods_activity_price}>{price} ₽</p>
          <div className={s.goods_activity_cartlike}>
            <button onClick={onClickAdd} className={s.cartlike__btn1}></button>
            {addedCount > 0 && <i>{addedCount}</i>}
            <button className={s.cartlike__btn2}></button>
          </div>
        </div>
      </li>
  );
};
