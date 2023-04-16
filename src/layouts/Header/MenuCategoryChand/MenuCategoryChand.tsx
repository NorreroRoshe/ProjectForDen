import React from 'react';
import s from './MenuCategoryChand.module.scss';
import { Link } from 'react-router-dom';
import { Category } from '../MousrOverModal/MouseOverModal';

interface MenuPropsInter {
  data: Category[];
  setModal: (state: boolean) => void;
}

export const MenuCategoryChand: React.FC<MenuPropsInter> = ({ data, setModal }) => {

  const onClickListItem = () => {
    setModal(false); //Выбери какой-нибудь пункт и далее скройся
  };
  return (
    <ul className={s.menu_category__list}>
      {data.map(({ title, img, menuItems }, i) => (
        <li key={i} className={s.menu_category__list_item}>
          <Link
            onClick={onClickListItem}
            rel="nofollow"
            className={s.menu_category__list_link}
            to="/chapter">
            <span className={s.menu_category__link_preview}>
              <img
                alt={title}
                className={s.menu_category__link_image}
                height="40"
                loading="lazy"
                src={img}
                width="67"
              />
            </span>
            <span className={s.menu_category__link_text}>{title}</span>
          </Link>
          {menuItems.map((obj, i) => (
            <ul key={i} className={s.menu_category__list1}>
              <li className={s.menu_category__list_item}>
                <Link
                  onClick={onClickListItem}
                  key={i}
                  rel="nofollow"
                  className={s.menu_category__list_links}
                  to="/chapter">
                  {obj.info}
                </Link>
              </li>
            </ul>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default MenuCategoryChand;
