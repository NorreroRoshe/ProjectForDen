import React from 'react';
import styles from './ProductInfo.module.scss';
import { ImgBlock } from './ImgBlock/index';
import { DescBlock } from './DescBlock/index';
import { ProductState } from '../Product';

type Props = {
  chand: ProductState;
};

export const ProductInfo: React.FC<Props> = ({ chand }) => {
  return (
    <div className={`${styles.product_info_container} ${styles.container}`}>
      <ImgBlock chand={chand} />
      <DescBlock chand={chand} />
    </div>
  );
};
