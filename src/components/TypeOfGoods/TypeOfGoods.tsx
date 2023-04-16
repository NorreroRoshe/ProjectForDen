import React from 'react';
import { Link } from 'react-router-dom';
import s from './TypeOfGoods.module.scss';

type LightType = {
  info: string;
  img: any;
};

export type typesOfChapter = {
  title: string;
  types: LightType[];
};

type TypeOfGoodsProp = {
  typesHome: typesOfChapter[];
};

export const TypeOfGoods: React.FC<TypeOfGoodsProp> = ({ typesHome }) => {
  return (
    <section className={s.section_product}>
      <div className={s.mb50}></div>
      {typesHome.map(({ title, types }, i) => (
        <div key={i} className={`${s.container} ${s.product__container}`}>
          <h2 className={s.product_heading}>{title}</h2>
          <div className={s.product__categories}>
            {types.map((obj, i) => (
              <Link to='/' key={i} className={s.product__categories_item}>
                <span className={s.product__categories_link} >
                  <img src={obj.img} className={s.product__categories_img} />
                  <p className={s.product__categories_description}>{obj.info}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>

    // <section className={s.section_product}>
    //   {typesHome.map(({ title, types }, i) => (
    //     <div key={i} className={`${s.container} ${s.product__container}`}>
    //       <h2 className={s.product_heading}>{title}</h2>
    //       <div className={s.product__categories}>
    //         {types.map((obj, i) => (
    //           <Link className={s.product__categories_list} key={i} to="/">
    //             <div
    //               style={{
    //                 background: `url(${obj.img})`,
    //                 backgroundPosition: 'center',
    //                 backgroundRepeat: 'no-repeat',
    //                 backgroundSize: 'cover',
    //               }}
    //               className={s.product__categories_item}>
    //               <div className={s.product__categories_link}>
    //                 <img src={obj.img} alt="Lustra" className={s.product__categories_img} />
    //                 <p className={s.product__categories_description}>{obj.info}</p>
    //               </div>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </section>
  );
};
