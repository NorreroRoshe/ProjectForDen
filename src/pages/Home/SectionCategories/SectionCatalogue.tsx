import React from 'react';
import s from './SectionCatalogue.module.scss';
import { Link } from 'react-router-dom';

export const SectionCatalogue: React.FC = () => {
  return (
    <>
      <section className={s.section_catalogue}>
        <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={s.svet_wrapper}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={s.wrapper_product_desc}>
                <h4 className={s.product_desc_header}>Светильники</h4>
                <h5 className={s.product_desc_slogan}>Свет в гармонии с твоим пространством.</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                  В каталог
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}>
                    Привезем на примерку
                  </Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={s.image_svet} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={`${s.svet_wrapper} ${s.svet_wrapper_bl}`}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={`${s.wrapper_product_desc} ${s.wrapper_product_desc_bl}`}>
                <h4 className={s.product_desc_header}>Мебель</h4>
                <h5 className={s.product_desc_slogan}>Уютно. Стильно. Притягательно.</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                    В каталог
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}>
                    Возьмем замеры
                  </Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={`${s.image_svet} ${s.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section_catalogue} ${s.section_catalogue1}`}>
        <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={`${s.svet_wrapper} ${s.svet_wrapper_bl}`}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={`${s.wrapper_product_desc} ${s.wrapper_product_desc_bl}`}>
                <h4 className={s.product_desc_header}>Зеркала</h4>
                <h5 className={s.product_desc_slogan}>Отражение стиля.</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                    В каталог
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}></Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={`${s.image_svet} ${s.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={`${s.svet_wrapper} ${s.svet_wrapper_bl}`}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={`${s.wrapper_product_desc} ${s.wrapper_product_desc_bl}`}>
                <h4 className={s.product_desc_header}>Картины</h4>
                <h5 className={s.product_desc_slogan}>Цвета, которые говорят.</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                    В каталог
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}></Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={`${s.image_svet} ${s.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={`${s.svet_wrapper} ${s.svet_wrapper_sl}`}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={`${s.wrapper_product_desc}`}>
                <h4 className={s.product_desc_header}>Аксессуары</h4>
                <h5 className={s.product_desc_slogan}>Уютно. Стильно. Притягательно.</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                    В каталог
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}>
                    Привезем на примерку
                  </Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={`${s.image_svet} ${s.image_svet_sl}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.container} ${s.catalogue_container}`}>
          <div className={s.catalogue_svet}>
            <div className={s.svet_wrapper}>
              <Link to="/chapter" className={s.wrapper_link}></Link>
              <div className={s.wrapper_product_desc}>
                <h4 className={s.product_desc_header}>Грили и Мангалы</h4>
                <h5 className={s.product_desc_slogan}>Жарь лучше всех!</h5>
                <div className={s.product_desc_linkbox}>
                  <Link to="chapter" className={s.product_desc_link}>
                    В галерею
                  </Link>
                  <Link to="chapter" className={s.product_desc_link}></Link>
                </div>
              </div>
              <div className={s.svet_wrapper_image}>
                <figure className={s.image_svet} />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};
