import React from 'react';
// import { useWhyDidYouUpdate } from 'ahooks';

import s from './GoodsCatalogue.module.scss';
import { Sorts } from '../Sorts';
import { FilterBlock } from './FilterBlock/FilterBlock';
import { ProdBlock } from './GoodsBlock/ProdBlcok';
import Skeleton from './GoodsBlock/Skeleton';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectProduct } from '../redux/product/selectors';
import { setCategoryId, setSort } from '../redux/filter/slice';
import { fetchProduct } from '../redux/product/asyncActions';
import { ProductParams } from '../redux/product/types';

export function makeParams(params: ProductParams) {
  const result: Record<string, string | number> = {};

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      result[name] = value;
    }
  });

  return result;
}

export const GoodsCatalogue: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue, categoryId, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectProduct);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  React.useEffect(() => {
    // const category = categoryId > 0 ? `typeChand=${categoryId}` : '';
    // // const sortBy = sort.sortPropcategoryerty.replace('-', '');
    // const sortBy = sort.sortProperty.name;
    // // const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    // const order = sort.sortProperty.direction;
    // const search = searchValue ? `&search=${searchValue}` : '';

    const params = makeParams({
      typeChand: categoryId,
      sortBy: sort.sortProperty.name,
      order: sort.sortProperty.direction,
      search: searchValue,
    });

    //Fetch
    // fetch(`https://6348f1f20b382d796c7a79b1.mockapi.io/Pizza?${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then(res => res.json())
    //   .then((json) => {
    //     setItems(json);
    //     setIsLoading(false)
    //   })

    //Axios
    // await axios
    //   .get(`https://6348f1f20b382d796c7a79b1.mockapi.io/Pizza?${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then((res) => {
    //     setItems(res.data);
    //     setIsLoading(false)
    //     console.log(555);
    //   })

    //Сокращенный вариант axios
    dispatch(fetchProduct(params));

    // window.scroll(0, 0)
  }, [categoryId, sort, searchValue]);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  const chandaliars = items
    // .filter((obj) => {                   //Этот метод больше статический ( Локальный способ поиска ), без использования запроса на бэк          //перед тем как отрендерить пиццы -> отфильтруем
    //   if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj: any) => <ProdBlock key={obj.id} {...obj} />);

  return (
    <section className={s.section_catalogue}>
      <div className={`${s.catalogue__container} ${s.container}`}>
        <FilterBlock value={categoryId} onChangeCategory={onChangeCategory} />
        <div className={s.catalogue__product}>
          <Sorts title={'Сортировано по:'} />
          <h3 className={s.allproduct_heading}>Показано {40} товаров из {850} </h3>
          {status === 'error' ? (
            <div>Тут нечего ловить...</div>
          ) : (
            <div className={s.product_allproduct}>
              <ul className={s.allproduct_goods_list}>
                {status === 'loading' ? skeleton : chandaliars}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// [
//   {
//     "id": 0,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 1,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Вытянутые"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж"
//     ],
//     "color": [
//       "Бронзовый",
//       "Белый",
//       "Бежевый"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "usePlace": [
//       "Ресторан",
//       "Гостиная",
//       "Детская",
//       "Кабинет"
//     ],
//     "quantityBulbs": 1,
//     "TypeOfChandelier": 0,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 1,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 2,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Прямоугольные",
//       "Каскадные"
//     ],
//     "styleChand": [
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский"
//     ],
//     "color": [
//       "Бирюзовый",
//       "Голубой",
//       "Желтый"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "E27"
//     ],
//     "usePlace": [
//       "Ресторан",
//       "Гостиная",
//       "Детская",
//       "Кабинет"
//     ],
//     "quantityBulbs": 5,
//     "TypeOfChandelier": 1,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 2,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 3,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Маленькие",
//       "С абажурами"
//     ],
//     "styleChand": [
//       "Классический",
//       "Лофт",
//       "Минимализм"
//     ],
//     "color": [
//       "Зеленый",
//       "Золотой",
//       "Изумрудный"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "G4"
//     ],
//     "usePlace": [
//       "Ресторан",
//       "Гостиная",
//       "Детская",
//       "Кабинет"
//     ],
//     "quantityBulbs": 4,
//     "TypeOfChandelier": 2,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 3,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 4,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Модерн",
//       "НеоКлассика",
//       "Прованс"
//     ],
//     "color": [
//       "Коричневый",
//       "Красный",
//       "МатСильвер"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "G9"
//     ],
//     "usePlace": [
//       "Ресторан",
//       "Гостиная",
//       "Детская",
//       "Кабинет"
//     ],
//     "quantityBulbs": 6,
//     "TypeOfChandelier": 3,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 4,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 5,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Ретро",
//       "Современный",
//       "Стимпанк"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "E14"
//     ],
//     "usePlace": [
//       "Кухня",
//       "Лофт",
//       "Мансарда",
//       "Мастерская"
//     ],
//     "quantityBulbs": 1,
//     "TypeOfChandelier": 4,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 5,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 6,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Вытянутые",
//       "Прямоугольные",
//       "Каскадные",
//       "Маленькие",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Хай-тек"
//     ],
//     "color": [
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "E27"
//     ],
//     "usePlace": [
//       "Кухня",
//       "Лофт",
//       "Мансарда",
//       "Мастерская"
//     ],
//     "quantityBulbs": 6,
//     "TypeOfChandelier": 5,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 6,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 7,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Серебро",
//       "Серый",
//       "Синий"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "G4"
//     ],
//     "usePlace": [
//       "Кухня",
//       "Лофт",
//       "Мансарда",
//       "Мастерская"
//     ],
//     "quantityBulbs": 6,
//     "TypeOfChandelier": 6,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 7,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Каскадные",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "GU10"
//     ],
//     "usePlace": [
//       "Кухня",
//       "Лофт",
//       "Мансарда",
//       "Мастерская"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 7,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 8,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Вытянутые",
//       "Прямоугольные",
//       "Каскадные",
//       "Маленькие",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "G9"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 8,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 9,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Каскадные",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "E14"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 9,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 10,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Вытянутые",
//       "Прямоугольные",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "E27"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 10,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 11,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "G4"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 11,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 12,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Каскадные",
//       "Маленькие",
//       "С абажурами",
//       "Хрустальные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Обычные лампочки"
//     ],
//     "typePatron": [
//       "G9"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 12,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   },
//   {
//     "id": 13,
//     "imageUrl": "https://loft-concept.ru/upload/resize_cache/iblock/f3b/300_300_1/Lyustra_Glass_butterfly_chandelier.jpg",
//     "name": "Люстра Glass butterfly",
//     "articl": "9027/8 bronze",
//     "price": 98524,
//     "discountPrice": 1290,
//     "raiting": 8,
//     "date": "12.01.2023",
//     "typeChand": [
//       "Большие",
//       "Вытянутые",
//       "Прямоугольные",
//       "Каскадные"
//     ],
//     "styleChand": [
//       "Американский",
//       "Арт-деко",
//       "Винтаж",
//       "Восточный",
//       "Голивудское регенство",
//       "Калифорнийский",
//       "Классический",
//       "Лофт",
//       "Минимализм",
//       "Модерн",
//       "НеоКлассика",
//       "Прованс",
//       "Ретро",
//       "Современный",
//       "Стимпанк",
//       "Хай-тек"
//     ],
//     "color": [
//       "Медь",
//       "Мультицвет",
//       "Никель",
//       "Оранжевый",
//       "Прозрачный",
//       "Розовый",
//       "Серебро",
//       "Серый",
//       "Синий",
//       "Фиолетовый",
//       "Хром",
//       "Черный"
//     ],
//     "typeLight": [
//       "Светодиодные"
//     ],
//     "typePatron": [
//       "GU10"
//     ],
//     "usePlace": [
//       "Холл",
//       "Шоу-рум, студия, Бутик"
//     ],
//     "quantityBulbs": 3,
//     "TypeOfChandelier": 13,
//     "Manufacturer": "ButterflyLC",
//     "Material": [
//       "Металл",
//       "Стекло"
//     ],
//     "heightCh": 70,
//     "diameterCh": 80
//   }
// ]
