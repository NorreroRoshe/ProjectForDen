import React from 'react';
import s from '../GoodsCatalogue.module.scss';
import App from '../../sliders/PriceRange';
import Colorcheckbox from '../../Checkbox/ColorCheckbox';
// import Checkboxs from '../../Checkbox/StyleCheckbox';
import LightBulb from '../../sliders/LightBulb';
import TypeLight from '../../Checkbox/TypeLight';
// import СartridgeCheckbox from '../../Checkbox/СartridgeCheckbox';
// import TypeChandCheckbox from '../../Checkbox/TypeChandCheckbox';
// import Placeus from '../../Checkbox/PlaseusCheckbox';
// import Colorcheckbox from '../../Checkbox/ColorCheckbox';
// import TypeLight from '../../Checkbox/TypeLight';

export type FilterProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};

// const filterCatalogue = [
//   {
//     name: 'Тип люстры',
//     TypeLight: [
//       'Большие',
//       'Вытянутые, Прямоугольные',
//       'Каскадные',
//       'Маленькие',
//       'С абажурами',
//       'Хрустальные',
//     ],
// },
// {
//   name: 'Стиль',
//   TypeLight: [ 'Американский', 'Арт-деко', 'Винтаж', 'Восточный', 'Голивудское регенство', 'Калифорнийский', 'Классический', 'Лофт' ]
// },
// {
//   name: 'Цвет',
//   TypeLight: [ {s: 'Бронзовый'}, {s: 'Белый'}, {s: 'Бежевый'}, {s: 'Бирюзовый'}, {s: 'Голубой'}, {s: 'Желтый'}, {s: 'Зеленый'}, {s: 'Золотой'}, {s: 'Изумруд'}, {s: 'Коричневый'}, {s: 'Красный'}, {s: 'Мат сильвер'} ]
// },
// {
//   name: 'Тип освещения',
//   TypeLight: [ {s: 'Обычные лампочки'}, {s: 'Светодиодные'} ]
// },
// ];

export const FilterBlock: React.FC<FilterProps> = React.memo(({ value, onChangeCategory }) => {
  //React.memo нужен, чтобы компонент больше не перерисовывался
  return (
    <div className={s.catalogue__filter}>
      <h3 className={s.filter__title}>Фильтр</h3>
      <div className={s.catalogue__border}>
        <div className={s.filter__fil}>
          <div className={s.filter__fil_price}>
            <h4 className={s.filter__fil_price_head}>Розничаня цена</h4>
            <div className={s.polsunok}>
              <App /> {/* как перекинуть сюда пропсы , в классовый компонент */}
            </div>
          </div>
          {/* {filterCatalogue.map(({ name, TypeLight }, i) => (
            <div key={i} className={s.product__fil}>
              <div className={s.product__fil_style}>
                <h4 className={s.product__fil_style_head}>{name}</h4>
                <div className={s.polsunok}>
                  <div
                    className={`${s.header__dropdown_wrap} ${s.header__dropdown_wrap_typelught}`}
                    data-simplebar>
                    {TypeLight.map((obj, i) => (
                      <div
                        key={i}
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'styles.form_group active' : ''}>
                        {obj}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          <div className={s.product__fil}>
            <div className={s.product__fil_style}>
              <h4 className={s.product__fil_style_head}>{'asd'}</h4>
              <TypeLight value={value} onChangeCategory={onChangeCategory} />
            </div>
          </div>
          <Colorcheckbox value={value} onChangeCategory={onChangeCategory} />
          <div className={s.filter__fil_price}>
            <h4 className={s.filter__fil_price_head}>Розничаня цена</h4>
            <div className={s.polsunok}>
              <LightBulb />
            </div>
          </div>
          <div className={s.product__fil}>
            <div className={s.product__fil_primenit}>
              <button className={s.product__fil_primenit_search}>
                <span className={`${s.product__fil_primenit_btn} ${s.primenit_btn}`}>
                  Применить фильтр
                </span>
                <span className={`${s.product__fil_primenit_btn} ${s.primenit_btn}`}>
                  Найдено: {122} тов.
                </span>
              </button>
              <button className={s.product__fil_primenit_clear}>Сбросить фильтр</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
