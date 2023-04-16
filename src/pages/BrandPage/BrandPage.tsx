import React from 'react';
import s from './BrandPage.module.scss';
import { GoodsCatalogue } from '../../components/GoodsCatalogue/GoodsCatalogue';

const BrandPage: React.FC = () => {
  return (
    <div className={`${s.container} ${s.brand__container}`}>
      <div className={s.brand__mt}>
        <h2 className={s.brand__title}>Butterfly Light Co.</h2>
        <p className={s.brand_desc}>
          BUTTERFLYLC - это итальянская фабрика светильников, которая производит высококачественные
          светильники с привлекательным дизайном. Вся продукция производится в Италии с
          использованием только лучших материалов и передовых технологий.
        </p>
        <GoodsCatalogue />
      </div>
    </div>
  );
};

export default BrandPage;
