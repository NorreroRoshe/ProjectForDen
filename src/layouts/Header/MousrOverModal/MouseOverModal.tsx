import React from 'react';
import { Modal } from '../../../components/HoverWindow/HoverWindow';
import s from '../Header.module.scss';
import { MenuCategoryChand } from '../MenuCategoryChand/MenuCategoryChand';

type MenuItem = {
  info: string;
};

export type Category = {
  title: string;
  img: string;
  menuItems: MenuItem[];
};

type DataProps = {
  categoryItem: string;
  dataProduct: Category[];
};

const data: DataProps[] = [
  {
    categoryItem: 'Свет-Мебебль-Зеркала-Картины-Аксессуары-Шторы-Бренды-Outlet-#НашиПроекты',
    dataProduct: [
      {
        title: 'Люстры',
        img: 'https://loft-concept.ru/upload/uf/c78/z9h2f9dym2bu4eg33ceh0gihooc35ymc/chandelier.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Светодиодные' },
          { info: 'Каскадные' },
          { info: 'Линейные, Прямоугольные' },
          { info: 'Многоямрусные' },
          { info: 'Большие люстры' },
          { info: 'Хрустальные, стеклянные' },
          { info: 'Деревянные' },
          { info: 'С птичками' },
          { info: 'Паук' },
        ],
      },
      {
        title: 'Подвесные светилники',
        img: 'https://loft-concept.ru/upload/uf/883/wh8fjjpfcrykhwbsevxjl9vm0kjm1fsn/podvesnye_svetilniki.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Офисные' },
          { info: 'Геометрические' },
          { info: 'Металл' },
          { info: 'Бетонные светильники' },
          { info: 'Стеклянный плафон' },
          { info: 'Деревянные светильники' },
        ],
      },
      {
        title: 'Потолочные ветильники',
        img: 'https://loft-concept.ru/upload/uf/508/ojer1g1hvm0kcad5aszrdcdp97ixzkch/potolochnye_svetilniki.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Офисные' },
          { info: 'Диски' },
          { info: 'Вентиляторы' },
          { info: 'Накладные' },
          { info: 'На штанге' },
          { info: 'На кухню' },
          { info: 'Настенно-потолочные' },
        ],
      },
      {
        title: 'Бра, Настенные лампы',
        img: 'https://loft-concept.ru/upload/uf/e2e/mkjhp9qv4r4mliy5xdk4xdbphdowwsf3/bra_nastennye_lampy.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Светодиодные' },
          { info: 'Неоновые слова' },
          { info: 'Гибкие бра' },
          { info: 'Бра с абажуром' },
          { info: '1 лампочка' },
          { info: '2 лампочки' },
          { info: '3 и более лампоек' },
          { info: 'В спальню' },
        ],
      },
      {
        title: 'Ретро патроны и подвесные лампы',
        img: 'https://loft-concept.ru/upload/uf/206/zy8iu3lzyfse4241e6mlgvevdpmnkt8p/retro_patrony.png',
        menuItems: [{ info: 'Бетон' }, { info: 'Дерево' }, { info: 'Металл' }, { info: 'Пластик' }],
      },
      {
        title: 'Натсольные лампы',
        img: 'https://loft-concept.ru/upload/uf/765/6mgynroonz2hwz1rrxjkj5g1lbmwfb32/table_lamp_blue.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Прованс' },
          { info: 'Детские' },
          { info: 'Для рабочего стола' },
          { info: 'С абажуром' },
        ],
      },
      {
        title: 'Торшеры',
        img: 'https://loft-concept.ru/upload/uf/970/kxd283l010qpxdnuus9hglodl0u2p6fh/torshery.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Прованс' },
          { info: 'С абажуром' },
          { info: 'Изогнутые' },
          { info: '1 лампочка' },
          { info: '2 и более ламп' },
        ],
      },
      {
        title: 'Подсветка для картин',
        img: 'https://loft-concept.ru/upload/uf/a7d/rpa6d7gjqw3xq62h8hgqqutle5g0lmi7/podsvetka_dlya_kartin.png',
        menuItems: [{ info: 'Современная' }, { info: 'Класическая' }],
      },
      {
        title: 'Споты потолочные',
        img: 'https://loft-concept.ru/upload/uf/45b/bty7tm771vc3pnk7hhy9tjxv7bml5roh/spots.png',
        menuItems: [
          { info: 'Встраиваемые' },
          { info: 'Накладные' },
          { info: 'Поворотные' },
          { info: '1 лампочка' },
          { info: '2 и более лампочек' },
          { info: 'Точечные светильники' },
          { info: 'Трековые споты' },
        ],
      },
      {
        title: 'Трековые системы',
        img: 'https://loft-concept.ru/upload/uf/791/k83coatv1a6rvb3yjkcc9okjpcl5aotv/trekovye_sistemy.png',
        menuItems: [],
      },
      {
        title: 'Светодиодная подсветка',
        img: 'https://loft-concept.ru/upload/uf/0e5/kx0gns663zj0sk332pr72hy976pn4u40/svetodiody.png',
        menuItems: [
          { info: 'Светодиодные ленты' },
          { info: 'Блоки питания' },
          { info: 'Профиль для лент' },
          { info: 'Рассеиватели' },
          { info: 'Светодиодные' },
          { info: 'Камины' },
        ],
      },
      {
        title: 'Уличный свет',
        img: 'https://loft-concept.ru/upload/uf/8ed/zpycudzr35diaiqb6q2m7n38gjgqyn7e/ulichniy_svet.png',
        menuItems: [
          { info: 'Подвесные' },
          { info: 'Настенные' },
          { info: 'Парковые торшеры' },
          { info: 'Ландшафтные свет' },
        ],
      },
      {
        title: 'Лампочки',
        img: 'https://loft-concept.ru/upload/uf/63c/r0wg5h114s8zhns8ykkeswvllzy5yi8d/lampochki.png',
        menuItems: [
          { info: 'E14' },
          { info: 'E27' },
          { info: 'G9' },
          { info: 'G4' },
          { info: 'G4' },
          { info: 'Дизайнерские формы' },
          { info: 'Большие лампочки' },
        ],
      },
      {
        title: 'Аксессуары и комплектующие',
        img: 'https://loft-concept.ru/upload/uf/102/kb808ppvkrughw8a9gnu8mk4slz8hkez/aksessuary.png',
        menuItems: [{ info: 'Основания для светильников' }],
      },
    ],
  },
  {
    categoryItem: 'Мебель',
    dataProduct: [
      {
        title: 'Люстры',
        img: 'https://loft-concept.ru/upload/uf/c78/z9h2f9dym2bu4eg33ceh0gihooc35ymc/chandelier.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Светодиодные' },
          { info: 'Каскадные' },
          { info: 'Линейные, Прямоугольные' },
          { info: 'Многоямрусные' },
          { info: 'Большие люстры' },
          { info: 'Хрустальные, стеклянные' },
          { info: 'Деревянные' },
          { info: 'С птичками' },
          { info: 'Паук' },
        ],
      },
      {
        title: 'Подвесные светилники',
        img: 'https://loft-concept.ru/upload/uf/883/wh8fjjpfcrykhwbsevxjl9vm0kjm1fsn/podvesnye_svetilniki.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Офисные' },
          { info: 'Геометрические' },
          { info: 'Металл' },
          { info: 'Бетонные светильники' },
          { info: 'Стеклянный плафон' },
          { info: 'Деревянные светильники' },
        ],
      },
      {
        title: 'Потолочные ветильники',
        img: 'https://loft-concept.ru/upload/uf/508/ojer1g1hvm0kcad5aszrdcdp97ixzkch/potolochnye_svetilniki.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Офисные' },
          { info: 'Диски' },
          { info: 'Вентиляторы' },
          { info: 'Накладные' },
          { info: 'На штанге' },
          { info: 'На кухню' },
          { info: 'Настенно-потолочные' },
        ],
      },
      {
        title: 'Бра, Настенные лампы',
        img: 'https://loft-concept.ru/upload/uf/e2e/mkjhp9qv4r4mliy5xdk4xdbphdowwsf3/bra_nastennye_lampy.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Классика' },
          { info: 'Прованс' },
          { info: 'Восток' },
          { info: 'Детские' },
          { info: 'Светодиодные' },
          { info: 'Неоновые слова' },
          { info: 'Гибкие бра' },
          { info: 'Бра с абажуром' },
          { info: '1 лампочка' },
          { info: '2 лампочки' },
          { info: '3 и более лампоек' },
          { info: 'В спальню' },
        ],
      },
      {
        title: 'Ретро патроны и подвесные лампы',
        img: 'https://loft-concept.ru/upload/uf/206/zy8iu3lzyfse4241e6mlgvevdpmnkt8p/retro_patrony.png',
        menuItems: [{ info: 'Бетон' }, { info: 'Дерево' }, { info: 'Металл' }, { info: 'Пластик' }],
      },
      {
        title: 'Натсольные лампы',
        img: 'https://loft-concept.ru/upload/uf/765/6mgynroonz2hwz1rrxjkj5g1lbmwfb32/table_lamp_blue.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Прованс' },
          { info: 'Детские' },
          { info: 'Для рабочего стола' },
          { info: 'С абажуром' },
        ],
      },
      {
        title: 'Торшеры',
        img: 'https://loft-concept.ru/upload/uf/970/kxd283l010qpxdnuus9hglodl0u2p6fh/torshery.png',
        menuItems: [
          { info: 'Лофт' },
          { info: 'Дизайнерские' },
          { info: 'Прованс' },
          { info: 'С абажуром' },
          { info: 'Изогнутые' },
          { info: '1 лампочка' },
          { info: '2 и более ламп' },
        ],
      },
      {
        title: 'Подсветка для картин',
        img: 'https://loft-concept.ru/upload/uf/a7d/rpa6d7gjqw3xq62h8hgqqutle5g0lmi7/podsvetka_dlya_kartin.png',
        menuItems: [{ info: 'Современная' }, { info: 'Класическая' }],
      },
      {
        title: 'Споты потолочные',
        img: 'https://loft-concept.ru/upload/uf/45b/bty7tm771vc3pnk7hhy9tjxv7bml5roh/spots.png',
        menuItems: [
          { info: 'Встраиваемые' },
          { info: 'Накладные' },
          { info: 'Поворотные' },
          { info: '1 лампочка' },
          { info: '2 и более лампочек' },
          { info: 'Точечные светильники' },
          { info: 'Трековые споты' },
        ],
      },
      {
        title: 'Трековые системы',
        img: 'https://loft-concept.ru/upload/uf/791/k83coatv1a6rvb3yjkcc9okjpcl5aotv/trekovye_sistemy.png',
        menuItems: [],
      },
      {
        title: 'Светодиодная подсветка',
        img: 'https://loft-concept.ru/upload/uf/0e5/kx0gns663zj0sk332pr72hy976pn4u40/svetodiody.png',
        menuItems: [
          { info: 'Светодиодные ленты' },
          { info: 'Блоки питания' },
          { info: 'Профиль для лент' },
          { info: 'Рассеиватели' },
          { info: 'Светодиодные' },
          { info: 'Камины' },
        ],
      },
      {
        title: 'Уличный свет',
        img: 'https://loft-concept.ru/upload/uf/8ed/zpycudzr35diaiqb6q2m7n38gjgqyn7e/ulichniy_svet.png',
        menuItems: [
          { info: 'Подвесные' },
          { info: 'Настенные' },
          { info: 'Парковые торшеры' },
          { info: 'Ландшафтные свет' },
        ],
      },
      {
        title: 'Лампочки',
        img: 'https://loft-concept.ru/upload/uf/63c/r0wg5h114s8zhns8ykkeswvllzy5yi8d/lampochki.png',
        menuItems: [
          { info: 'E14' },
          { info: 'E27' },
          { info: 'G9' },
          { info: 'G4' },
          { info: 'G4' },
          { info: 'Дизайнерские формы' },
          { info: 'Большие лампочки' },
        ],
      },
      {
        title: 'Аксессуары и комплектующие',
        img: 'https://loft-concept.ru/upload/uf/102/kb808ppvkrughw8a9gnu8mk4slz8hkez/aksessuary.png',
        menuItems: [{ info: 'Основания для светильников' }],
      },
    ],
  },
];

export const MouseOverModal: React.FC = () => {
  const [isModal, setModal] = React.useState<boolean>(false);
  const onClose = () => setModal(false);
  return (
    <>
      {data.map(({ categoryItem, dataProduct }, i) => (
        <a
          key={i}
          className={s.header_low_item}
          // onClick={() => setModal(!isModal)}
          onMouseOver={() => setModal(true)}
          onMouseLeave={() => setModal(false)}>
          <button className={s.low_item_btn}>
            <strong className={s.low_item_heading}>{categoryItem}</strong>
            <span className={s.low_item_icon}></span>
          </button>
          <Modal
            visible={isModal}
            title=""
            content={<MenuCategoryChand data={dataProduct} setModal={setModal} />}
            onClose={onClose}
          />
        </a>
      ))}
    </>
  );
};

// import React from 'react';
// import { Modal } from '../../../components/HoverWindow/HoverWindow';
// import s from '../Header.module.scss';
// import { MenuCategoryChand } from '../MenuCategoryChand/MenuCategoryChand';

// type MenuItem = {
//   info: string;
// };

// export type Category = {
//   title: string;
//   img: string;
//   menuItems: MenuItem[];
// };

// type DataProps = {
//   categoryItem: string;
//   dataProduct: Category[];
//   isModal: boolean;
//   setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
//   isVis: boolean;
//   setIsVis: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const data: DataProps[] = [
//   {
//     categoryItem: 'Свет-Мебебль-Зеркала-Картины-Аксессуары-Шторы-Бренды-Outlet-#НашиПроекты',
//     dataProduct: [
//       {
//         title: 'Лампочки',
//         img: 'https://loft-concept.ru/upload/uf/63c/r0wg5h114s8zhns8ykkeswvllzy5yi8d/lampochki.png',
//         menuItems: [
//           { info: 'E14' },
//           { info: 'E27' },
//           { info: 'G9' },
//           { info: 'G4' },
//           { info: 'G4' },
//           { info: 'Дизайнерские формы' },
//           { info: 'Большие лампочки' },
//         ],
//       },
//       {
//         title: 'Аксессуары и комплектующие',
//         img: 'https://loft-concept.ru/upload/uf/102/kb808ppvkrughw8a9gnu8mk4slz8hkez/aksessuary.png',
//         menuItems: [{ info: 'Основания для светильников' }],
//       },
//     ],
//     isModal: false,
//     setIsModal: () => {},
//     isVis: false,
//     setIsVis: () => {},
//   },
//   {
//     categoryItem: 'Мебель',
//     dataProduct: [
//       {
//         title: 'Люстры',
//         img: 'https://loft-concept.ru/upload/uf/c78/z9h2f9dym2bu4eg33ceh0gihooc35ymc/chandelier.png',
//         menuItems: [
//           { info: 'Лофт' },
//           { info: 'Дизайнерские' },
//           { info: 'Классика' },
//           { info: 'Прованс' },
//           { info: 'Восток' },
//           { info: 'Детские' },
//           { info: 'Светодиодные' },
//           { info: 'Каскадные' },
//           { info: 'Линейные, Прямоугольные' },
//           { info: 'Многоямрусные' },
//           { info: 'Большие люстры' },
//           { info: 'Хрустальные, стеклянные' },
//           { info: 'Деревянные' },
//           { info: 'С птичками' },
//           { info: 'Паук' },
//         ],
//       },
//     ],
//     isModal: false,
//     setIsModal: () => {},
//     isVis: false,
//     setIsVis: () => {},
//   },
// ];

// export const MouseOverModal: React.FC = () => {
//   return (
//     <>
//       {data.map(({ categoryItem, dataProduct, isModal, setIsModal, isVis, setIsVis }, i) => (
//         <a
//           key={i}
//           className={s.header_low_item}
//           onMouseOver={() => {
//             if (categoryItem === 'Свет') {
//               setIsModal(true);
//             } else if (categoryItem === 'Мебель') {
//               setIsVis(true);
//             }
//           }}
//           onMouseLeave={() => {
//             if (categoryItem === 'Свет') {
//               setIsModal(false);
//             } else if (categoryItem === 'Мебель') {
//               setIsVis(false);
//             }
//           }}>
//           <button className={s.low_item_btn}>
//             <strong className={s.low_item_heading}>{categoryItem}</strong>
//             <span className={s.low_item_icon}></span>
//           </button>
//           <Modal
//             visible={categoryItem === 'Свет' ? isModal : isVis}
//             title=""
//             content={<MenuCategoryChand data={dataProduct} />}
//             onClose={() => {
//               if (categoryItem === 'Свет') {
//                 setIsModal(false);
//               } else if (categoryItem === 'Мебель') {
//                 setIsVis(false);
//               }
//             }}
//           />
//         </a>
//       ))}
//     </>
//   );
// };
