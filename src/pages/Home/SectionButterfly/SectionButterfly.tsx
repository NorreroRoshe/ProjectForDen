import React from 'react';
import s from './SectionButterfly.module.scss';
import { Link } from 'react-router-dom';

//img
// import scala6 from '../../../assets/img/img/laScala6Orex.jpg'
// import assai from '../../../assets/img/img/assaiWh.jpg'
// import gulliver from '../../../assets/img/img/gulliverNat.jpg'
// import indasatore from '../../../assets/img/img/indasatore.jpg'
// import snake90 from '../../../assets/img/img/Snake90Kan.jpg'

export const SectionButterfly: React.FC = () => {
  return (
    <section className={s.section_butterfly}>
      <Link className={s.butterfly_back} to="/">
        <div className={s.butterfly_firstbox1}></div>
        <div className={s.butterfly_container}>
          <p className={s.butterfly_desc_text}>
            BUTTERFLYLC - это итальянская фабрика светильников, которая производит
            высококачественные светильники с привлекательным дизайном. Вся продукция производится в
            Италии с использованием только лучших материалов и передовых технологий.
          </p>
        </div>
      </Link>
      <h2 className={s.product_heading}>Популярные товары</h2>
      <div className={`${s.butterfly_collection__items} container`}>
        <div className={s.butterfly_collection__item}>
          <Link
            className={s.butterfly_product__link}
            to="/"
            target="_blank">
            <div className={s.butterfly_product__box}>
              <img
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src="https://butterflylc.store/image/cache/catalog/Products/105-5%20b%20nickel%20off-350x281.jpg"
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 105/500 </span>
            </p>
            <h5 className={s.butterfly_product__title}> Tenerife </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} to="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <img
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src="https://butterflylc.store/image/cache/catalog/Products/8101-8ni%20off-350x281.jpg"
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 8101/6 nick </span>
            </p>
            <h5 className={s.butterfly_product__title}> Gracia </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} to="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <img
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src="https://butterflylc.store/image/cache/catalog/Products/120-4%20Bl%20Br%20off1-1200x900.jpg"
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 120/4 black bronze </span>
            </p>
            <h5 className={s.butterfly_product__title}> Medusa </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} to="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <img
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src="https://butterflylc.store/image/cache/catalog/Products/805-6%20ni%20off-350x281.jpg"
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 805/6 nickel </span>
            </p>
            <h5 className={s.butterfly_product__title}> Antract </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} to="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <img
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src="https://butterflylc.store/image/cache/catalog/Products/9867-1t%20ni%20off-350x281.jpg"
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 9867/T nickel </span>
            </p>
            <h5 className={s.butterfly_product__title}> Nunito </h5>
          </Link>
        </div>
      </div>
      <Link className={s.butterfly_icon_btn} to="/">
        <span className={s.butterfly_icon_desc}>
          Просмотреть всю коллекцию <span>&gt;</span>
        </span>
      </Link>
    </section>
  );
};
