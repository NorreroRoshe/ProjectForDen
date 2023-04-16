import React from 'react';
import { Link } from 'react-router-dom';
import s from './LightCatalogue.module.scss';
import Lyustr from '../../assets/img/ButtImg/106-600br.jpg';
import Bra from '../../assets/img/ButtImg/8101-2Ni.jpg';
import Nastol from '../../assets/img/ButtImg/8101-1tNi.jpeg';
import Torsh from '../../assets/img/ButtImg/901-1fWhite.jpg';
import Podves from '../../assets/img/ButtImg/106-160ni.jpg';
import Acses from '../../assets/img/ButtImg/8101-TB on silver shade-1200x900.jpg';

export const LightCatalogue: React.FC = () => {
  return (
    <section id="popular" className={`${s.section_categories} ${s.container}`}>
      <h2 className={s.title_h2}>Каталог</h2>
      <ul className={s.popular_categories_list}>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Lyustr} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Люстры</h3>
              <Link to="/chapter" className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Bra} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Бра</h3>
              <Link to="/chapter" className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Nastol} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Настольные лампы</h3>
              <Link to="/chapter" className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Torsh} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Торшеры</h3>
              <Link to="/chapter" className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Podves} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Подвесные светильники</h3>
              <Link
                to="/vnutrennee-osveschenie/bra-dlya-chteniya"
                className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className={s.container_popular_categories_list}>
            <img src={Acses} alt="" />
            <div className={s.popular_categories_text}>
              <h3 className={s.popular_categories_title}>Прочие акссесуары</h3>
              <Link to="/chapter" className={s.btn_popular_categories}>
                Смотреть каталог
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <Link to="/chapter" className={s.btn_main_description}>
        Смотреть все категории
      </Link>
    </section>
  );
};
