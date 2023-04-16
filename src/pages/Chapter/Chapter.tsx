import React from 'react'
import s from './Chapter.module.scss'
import { TypeOfGoods, typesOfChapter } from '../../components/TypeOfGoods/TypeOfGoods';
import { GoodsCatalogue } from '../../components/GoodsCatalogue/GoodsCatalogue';

export const Chapter:React.FC = () => {
  const typesChapter: typesOfChapter[] = [
    {
      title: 'Каталог света',
      types: [
        {
          info: 'Дизайнерские',
          img: 'https://loft-concept.ru/upload/resize_cache/uf/574/h2aq124oh7leyqgg4az7lhohgr4fbkvs/210_210_1/dizaynerskie.jpg',
        },
        {
          info: 'Классика',
          img: 'https://loft-concept.ru/upload/resize_cache/uf/d3a/6b234tebklcx52bivk4z047g0m53oq1t/210_210_1/classic.jpg',
        },
        {
          info: 'Лофт',
          img: 'https://loft-concept.ru/upload/resize_cache/uf/3ee/cmp0371ok1hcz74tmlqrh4akc7xlk8eg/210_210_1/Loft.jpg',
        },
        {
          info: 'Светодиодные',
          img: 'https://loft-concept.ru/upload/resize_cache/iblock/750/300_300_1/Loft_Concept_16.jpg',
        },
        {
          info: 'Каскадные',
          img: 'https://loft-concept.ru/upload/resize_cache/uf/824/q9ce1fzqrldy1ntgw4bs3gl1j8zm2zvw/210_210_1/mnogoyarusniye.png.jpg',
        },
        {
          info: 'Подвесные',
          img: 'https://loft-concept.ru/upload/iblock/bac/Loft_Concept_Cedar_Moss_Light_16.jpg',
        },
        {
          info: 'Вытянутые',
          img: 'https://loft-concept.ru/upload/resize_cache/iblock/79a/owi8ueenqx6ghmkmxncav9bsnkvsabs9/300_300_1/lyustra_eichholtz_chandelier_verbier_rectangular.jpg',
        },
        {
          info: 'Большие люстры',
          img: 'https://loft-concept.ru/upload/resize_cache/iblock/718/grmc03hxqps230fdzbmgj1r6w781hbfw/300_300_1/40_4783.jpg',
        },
        {
          info: 'Хрустальные',
          img: 'https://loft-concept.ru/upload/resize_cache/uf/425/w8rx9r5tjpt9oao5uebgzby5d4ryguzk/210_210_1/wooden.jpg',
        },
        {
          info: 'С абажурами',
          img: 'https://loft-concept.ru/upload/iblock/df0/c600any0brj9ga80py3gr1j9vrv728ja/40_5206_.jpg',
        },
      ],
    },
  ];
  return (
    <div className={`${s.container} ${s.chapter__container}`}>
      <div className={s.chapter__mt}>
        <TypeOfGoods typesHome={typesChapter} />
        <GoodsCatalogue />
      </div>
    </div>
  )
}