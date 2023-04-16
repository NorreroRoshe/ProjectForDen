import React from 'react'
import { ProductState } from '../../Product';
import styles from './ImgBlock.module.scss'

type Props = {
  chand: ProductState;
};

export const ImgBlock: React.FC<Props> = ({ chand }) => {
  return (
    <div className={styles.product_info_photo}>
      <h1 className={styles.info_photo_header}>Люстра {chand.name}</h1>
      <p className={styles.info_photo_partnumber}>
        Артикул: <strong>{chand.articl}</strong>
      </p>
      <img src={chand.imageUrl} alt="" className={styles.info_photo_img} />
    </div>
  )
}
