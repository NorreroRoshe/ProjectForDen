import React from 'react';
import s from './Outlet.module.scss';
import { GoodsCatalogue } from '../../components/GoodsCatalogue/GoodsCatalogue';

const Outlet: React.FC = () => {
  return (
    <div className={`${s.container} ${s.outlet__container}`}>
      <div className={s.outlet__mt}>
        <h2 className={s.outlet__title}>Распродажа</h2>
        <GoodsCatalogue />
      </div>
    </div>
  );
};

export default Outlet;
