import React, { FC, useState, useRef, useEffect } from 'react';
import { useOutsideAlerter } from '../hookt/useClickOutside';
import { setSort } from './redux/filter/slice';
import { Sort } from './redux/filter/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from './redux/filter/selectors';

type SortProps = {
  title: string;
};

const list: Sort[] = [
  // { name: 'По популярности (DESC)', sortProperty: 'raiting' },
  // { name: 'По популярности (ASC)', sortProperty: '-raiting' },
  // { name: 'По цене (DESC)', sortProperty: 'price' },
  // { name: 'По цене (ASC)', sortProperty: '-price' },
  // { name: 'По алфавиту (DESC)', sortProperty: 'name' },
  // { name: 'По алфавиту (ASC)', sortProperty: '-name' },
  { name: 'по популярности', sortProperty: { direction: 'desc', name: 'raiting' } },
  { name: 'по новинкам', sortProperty: { direction: 'asc', name: 'raiting' } },
  { name: 'по цене (возрастание)', sortProperty: { direction: 'asc', name: 'price' } },
  { name: 'по цене (убывание)', sortProperty: { direction: 'desc', name: 'price' } },
  { name: 'по алфавиту (возрастание)', sortProperty: { direction: 'asc', name: 'name' } },
  { name: 'по алфавиту (убывание)', sortProperty: { direction: 'desc', name: 'name' } },
];

export const Sorts: FC<SortProps> = React.memo(({ title }) => {
  const dispatch = useDispatch();

  const { sort } = useSelector(selectFilter);

  const [open, setOpen] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(sortRef, () => setOpen(false));

  const onClickListItem = (obj: Sort) => {
    dispatch(setSort(obj)); //Делаем так, когда хотим чтобы чтонибудь выбралось
    setOpen(false); //Выбери какой-нибудь пункт и далее скройся
  };

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        setOpen(false);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>{title}</b>
        <button onClick={() => setOpen(!open)} className="sort__label_button">
          <span>{sort.name}</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
