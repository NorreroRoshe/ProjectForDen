import React from 'react'
import styles from '../DescBlock.module.scss'
import { Link } from 'react-router-dom';

export const ProBlock: React.FC = () => {
  return (
    <div className={styles.info_feature_dopinfo}>
      <Link to='/contacts' className={styles.dopinfo_link}>
        Задайте нам вопрос
      </Link >
      <Link to='/delivery' className={styles.dopinfo_link}>
        Про Доставку
      </Link>
      <Link to='' className={styles.dopinfo_link}>
        Про Утсановку
      </Link>
      <Link to='/warranty' className={styles.dopinfo_link}>
        Про Гарантию
      </Link>
      <Link to='/returns' className={styles.dopinfo_link}>
        Про Возврат и обмен
      </Link>
    </div >
  )
}
