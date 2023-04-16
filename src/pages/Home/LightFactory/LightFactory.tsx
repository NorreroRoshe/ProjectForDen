import React from 'react';
import s from './LightFactory.module.scss';

export const LightFactory: React.FC = () => {
  return (
    <section className={s.section_lightfactory}>
      <div className={`${s.container} ${s.lightfactory_container}`}>
        <div className={s.lightfactory_box}>
          <img
            className={s.box_img}
            src="https://serip.com.pt/site/uploads/todos/imagens/GlamourAP1447_24-FP08-10-14(LR).jpg"
            alt=""
          />
          <div className={s.box_desc}>
            <h2 className={s.box_desc_title}>Наше производство светильников</h2>
            <p className={s.box_desc_text}>
              Мы свяжемся с вами в ближайшее время и ответим на все интересующие вопросы по поводу
              производства светильников польностью по вашему дизайну.
            </p>
            <button className={s.box_desc_btn}>Написать нам</button>
          </div>
        </div>
      </div>
    </section>
  );
};
