import React from 'react';
import axios from 'axios';

import styles from './Product.module.scss';
import { AllCollection } from './AllCollection/index';
import { ProductInfo } from './ProductInfo/index';
import { WayToBack } from '../../components/WayToBack/WayToBack';
import { useParams, useNavigate } from 'react-router-dom';
import Skeleton from '../../components/GoodsCatalogue/GoodsBlock/Skeleton';

export type ProductState = {
  imageUrl: string;
  price: number;
  articl: string;
  name: string;
};

export const Product: React.FC = () => {
  const [chand, setChand] = React.useState<ProductState | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://6348f1f20b382d796c7a79b1.mockapi.io/Pizza/' + id);
        setChand(data);
      } catch (error) {
        alert('Ошибка при получении люстр!');
        navigate('/');
      }
    }
    fetchProduct();
  }, []);
  const skeleton = [...new Array(81)].map((_, index) => <Skeleton key={index} />);
  if (!chand) {
    // Если продукт пустой, тоесть еще загружается , то не показываем , когда прогрузится тогда уже и покажем
    return <div>{skeleton}</div>;
  }

  return (
    <div className={styles.container}>
      {/* <WayToBack top={156}/> */}
      <div className={styles.product_info}>
        <ProductInfo chand={chand} />
        <AllCollection />
      </div>
    </div>
  );
};
