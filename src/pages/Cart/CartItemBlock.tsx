import { Link } from 'react-router-dom';
import s from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../components/redux/cart/slice';
import { CartItem } from '../../components/redux/cart/types';

type CIBProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  articl: string;
  count: number;
};

const CartItemBlock: React.FC<CIBProps> = ({ id, name, price, imageUrl, articl, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem),
    );
  };

  const onClickMinus = () => {
    // if (count !== 0) {             //Здесь мы говорим, если товар в корзине уменьшаем то он может максимум доходить до 0 меньше не может
    dispatch(minusItem(id));
    // }
  };

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить данную позицию ?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={s.root_main}>
      <div className={s.root_main_left}>
        <div className={s.root_main_imgblock}>
          <Link to="" className={s.main_img}>
            <img src={imageUrl} alt="Светильник" className={s.root_main_imgblock} />
          </Link>
        </div>
        <div className={s.root_main_desc}>
          <h2 className={s.root_main_title}>
            <a href="" className={s.root_main_link}>
              {name}
            </a>
          </h2>
          <span className={s.root_main_artikul}>
            Артикул <strong> {articl}</strong>
          </span>
        </div>
      </div>
      <div className={s.root_main_right}>
        <div className={s.root_main_prices}>
          <div className={s.root_main_price}>
            <span className={s.price_discount}>120000 ₽.</span>
            <span className={s.price_desc}>
              {price * count}
              <span> ₽.</span>
            </span>
          </div>
          <div className={s.root_main_count}>
            <button
              disabled={count === 1}
              onClick={onClickMinus}
              className={`${s.count_desc_minus} ${s.count_desc}`}></button>
            <span className={s.count_desc}>{count}</span>
            <button
              onClick={onClickPlus}
              className={`${s.count_desc_plus} ${s.count_desc}`}></button>
          </div>
        </div>
        <div onClick={onClickRemove} className={s.root_main_end}>
          <span className={s.main_end_remove}></span>
        </div>
      </div>
    </div>
  );
};

export default CartItemBlock;
