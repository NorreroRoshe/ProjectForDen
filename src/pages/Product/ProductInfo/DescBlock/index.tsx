import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DescBlock.module.scss';
import like from '../../../../assets/img/heart-svgrepo-com.svg';
import bejColor from '../../../../assets/img/imgColors/bej.png';
import goldColor from '../../../../assets/img/imgColors/gold.png';
import { ProBlock } from './ProBlock/ProBlock';
import { ProductState } from '../../Product';

type Props = {
  chand: ProductState;
};

export const DescBlock: React.FC<Props> = ({ chand }) => {
  return (
    <div className={styles.product_info_feature}>
      <div className={styles.info_feature_price}>
        <p className={styles.feature_price_desc}>От {chand.price} ₽</p>
      </div>
      <div className={styles.info_feature_nalichie}>
        <p className={styles.feature_nalichie_desc}>Наличие на складе: {21} шт.</p>
      </div>
      <div className={styles.info_feature_action}>
        <div className={styles.feature_actions_selection}>
          {/* <Sort title={''} list={Productlist} /> */}
        </div>
        <div className={styles.feature_actions_btns}>
          <button className={styles.actions_btns_add}>Добавить в корзину</button>
          <button className={styles.actions_btns_optprice}>Узнать цену для дизайнеров</button>
        </div>
      </div>
      <div className={styles.info_feature_like}>
        <button className={styles.feature_like_btn}>
          <img className={styles.feature_like_img} src={like} alt="" />
        </button>
      </div>
      <div className={styles.info_feature_about}>
        <ul className={styles.feature_about_list}>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Производитель</span>
            <span className={styles.about_item_value}>ButterflyLC</span>
          </li>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Тип</span>
            <span className={styles.about_item_value}>Люстра</span>
          </li>
          <li className={`${styles.feature_about_item} ${styles.feature_about_color}`}>
            <span className={styles.about_item_category}>Цвет</span>
            <span className={`${styles.about_item_value} ${styles.about_item_value_color}`}>
              <img className={styles.about_item_color} src={bejColor} alt="" />
              <img className={styles.about_item_color} src={goldColor} alt="" />
            </span>
          </li>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Материал</span>
            <span className={styles.about_item_value}> Металл / Стекло /</span>
          </li>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Высота</span>
            <span className={styles.about_item_value}> 70 см</span>
          </li>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Диаметр</span>
            <span className={styles.about_item_value}> 80 см</span>
          </li>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Лампочки (Количество/Тип)</span>
            <span className={styles.about_item_value}> 8 х E14 </span>
          </li>
          <span className={styles.about_item_posscriptum}>(Лампочки в комплект не входят)</span>
          <li className={styles.feature_about_item}>
            <span className={styles.about_item_category}>Стиль</span>
            <span className={styles.about_item_value}>
              {' '}
              Неоклассика / Арт-деко / Современная классика /
            </span>
          </li>
        </ul>
      </div>
      <p className={styles.info_feature_desc}>
        Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем
        виде и цвете товара носит справочный характер и основывается на последних, доступных к
        моменту публикации, сведениях.
      </p>
      <ProBlock />
    </div>
  );
};
