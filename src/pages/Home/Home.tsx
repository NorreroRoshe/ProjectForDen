import React from 'react';

import { SectionHero } from './SectionHero/SectionHero';
import { TypeOfGoods, typesOfChapter } from '../../components/TypeOfGoods/TypeOfGoods';
import { GoodsCatalogue, makeParams } from '../../components/GoodsCatalogue/GoodsCatalogue';
import { LightFactory } from './LightFactory/LightFactory';
import { MirrorAdvertisement } from './MirrorAdvertisement/MirrorAdvertisement';
import { Partnership } from '../../components/Partnership/Partnership';
import { PreFooter } from './PreFooter/PreFooter';
import { SectionFoppa } from './SectionFoppa/SectionFoppa';
import { SectionButterfly } from './SectionButterfly/SectionButterfly';

//import Photo...
import Chandalier from '../../assets/img/img/02.jpg';
import Podvesy from '../../assets/img/img/photo_2023-03-12_20-32-56.jpg';
import Potolochka from '../../assets/img/img/Potolochka.jpg';
import Bra from '../../assets/img/img/bra.jpg';
import NastLamp from '../../assets/img/img/Cupole-tl.jpg';
import Torsher from '../../assets/img/img/drylight-stl6.jpg';
import PhotoLight from '../../assets/img/img/63bf3ffc7c98bdf0167f9c7160fd29eb.jpg';
import Lampochka from '../../assets/img/img/lampochka.jpg';
import Divan from '../../assets/img/img/DivanG.png';
import Stolik from '../../assets/img/img/StolikG.png';
import Chair from '../../assets/img/img/ChairG.png';
import Stol from '../../assets/img/img/StolG.jpg';
import Kreslo from '../../assets/img/img/Kreslo.jpg';
import Shkaf from '../../assets/img/img/ShkafG.jpg';
import Foppppa from '../../assets/img/img/laScala6Orex.jpg';
import Konsol from '../../assets/img/img/KonsolG.jpg';
import Krovat from '../../assets/img/img/Krovat.jpg';
import { LightCatalogue } from '../../components/LightCatalogue/LightCatalogue';
import { SaleBunner } from './SaleBunner/SaleBunner';

const typesHome: typesOfChapter[] = [
  {
    title: 'Каталог света',
    types: [
      { info: 'Люстры', img: Chandalier },
      { info: 'Подвесные светильники', img: Podvesy },
      { info: 'Потолочные светилники', img: Potolochka },
      { info: 'Бра , настенные лампы', img: Bra },
      { info: 'Настольные лампы', img: NastLamp },
      { info: 'Торшеры', img: Torsher },
      { info: 'Подсветка для картин', img: PhotoLight },
      { info: 'Лампочки', img: Lampochka },
      { info: 'Посмотреть все категории', img: '' },
    ],
  },
];

const typesFurniture: typesOfChapter[] = [
  {
    title: 'Каталог мебели',
    types: [
      { info: 'Диваны', img: Divan },
      { info: 'Кресла', img: Kreslo },
      { info: 'Столы', img: Stol },
      { info: 'Столики', img: Stolik },
      { info: 'Стулья', img: Chair },
      { info: 'Шкафы', img: Shkaf },
      { info: 'Консоли', img: Konsol },
      { info: 'Коллекция FoppaPedretti', img: Foppppa },
      { info: 'Кровати', img: Krovat },
      { info: 'Посмотреть все категории', img: '' },
    ],
  },
];

export const Home: React.FC = () => {
  return (
    <div className="wrapp">
      <main>
        <SectionHero />
        <LightCatalogue />
        <SaleBunner />
        <LightFactory />
        <Partnership />
      </main>
    </div>
  );
};

// [
//   {
//     "info": "Люстры",
//     "img": "https://loft-concept.ru/upload/uf/f95/Lyustry.jpg"
//   },
//   {
//     "info": "Подвесные светильники",
//     "img": "https://loft-concept.ru/upload/uf/a77/Podvesnye-svetilniki.jpg"
//   },
//   {
//     "info": "Потолочные светилники",
//     "img": "https://loft-concept.ru/upload/uf/1a9/Potolochnye-svetilniki.jpg"
//   },
//   {
//     "info": "Бра , настенные лампы",
//     "img": "https://loft-concept.ru/upload/uf/0e0/Bra.jpg"
//   },
//   {
//     "info": "Настольные лампы",
//     "img": "https://loft-concept.ru/upload/uf/a7c/Nastolnaya-lampa.jpg"
//   },
//   {
//     "info": "Торшеры",
//     "img": "https://loft-concept.ru/upload/uf/f41/Torshery.jpg"
//   },
//   {
//     "info": "Подсветка для картин",
//     "img": "https://loft-concept.ru/upload/uf/b7d/Podsvetka-dlya-kartin.jpg"
//   },
//   {
//     "info": "Лампочки",
//     "img": "https://loft-concept.ru/upload/uf/ac0/Lampochki.jpg"
//   }
// ]
