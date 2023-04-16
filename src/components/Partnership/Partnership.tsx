import React from 'react';
import s from './Partnership.module.scss';
import { Link } from 'react-router-dom';

export const Partnership: React.FC = () => {
  return (
    <div className={s.partner__data}>
      <div className={s.container}>
        <div className={s.partner__title}>Сотрудничество</div>
        <div className={s.partner__desc}>
          Moi-Brend приглашает к сотрудничеству дизайнеров, арихтекторов а также ритейлеров и диллеров на выгодных условиях
        </div>
        <div className={s.partner__btns_wrap}>
          <Link className={s.partner__btn} to="/">
            Дизйанерам
          </Link>
          <Link className={s.partner__btn} to="/">
            Ретейлерам
          </Link>
        </div>
      </div>
    </div>
  );
};
