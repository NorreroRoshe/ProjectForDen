import React from 'react'
import styles from './Checkbox.module.scss';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import { FilterProps } from '../GoodsCatalogue/FilterBlock/FilterBlock';

const style: string[] = ['Большие', 'Вытянутые', 'Прямоугольные', 'Каскадные', 'Маленькие', 'С абажурами', 'Хрустальные'];

const TypeLight:React.FC<FilterProps> = ({ value, onChangeCategory }) => {

  return (
    <div className={styles.new}>
      <form>
        <div className={`${styles.header__dropdown_wrap} ${styles.header__dropdown_wrap_typelught}`} data-simplebar>
          {
            style.map((obj, i) => (<div key={i} className={styles.form_group}>
              <input type="checkbox" id={obj} />
              <label onClick={() => onChangeCategory(i)} className={value === i ? `${styles.form_group} active` : ''} htmlFor={obj}>{obj}</label>
            </div>))
          }
        </div>
      </form>
    </div >
  );
}

export default TypeLight;