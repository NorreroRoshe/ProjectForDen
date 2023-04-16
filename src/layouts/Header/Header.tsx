import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import s from './Header.module.scss';
import { Modal } from '../../components/HoverWindow/HoverWindow';
import { useSelector } from 'react-redux';
import Search from '../../components/Search/index';
import { selectCart } from '../../components/redux/cart/selectors';
import HeaderCartCount from './HeaderCartCount';
import { MouseOverModal } from './MousrOverModal/MouseOverModal';

function Header() {
  const { items } = useSelector(selectCart);
  const location = useLocation();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className={s.page_header}>
      <nav className={s.main_menu}>
        <div className={s.old_container}>
          <div className={s.main_menu__items}>
            <Link to="/collaboration" className={s.main_menu__item}>
              Сотрудничество
            </Link>
            <Link to="/collaboration" className={s.main_menu__item}>
              Дизайнерам
            </Link>
            <Link to="/chapter" className={s.main_menu__item}>
              Распродажа
            </Link>
            <Link to="/collaboration" className={s.main_menu__item}>
              Производство
            </Link>
            <Link to="/contacts" className={s.main_menu__item}>
              Контакты
            </Link>
          </div>
        </div>
        <div className={s.second_menu}>
          <div className={s.container_wide}>
            <div className={s.second_menu__items}>
              <Link to="/chapter" className={s.second_menu__item}>
                Люстры
              </Link>
              <span className={s.second_menu__item_dec}>•</span>
              <Link to="/chapter" className={s.second_menu__item}>
                Бра
              </Link>
              <span className={s.second_menu__item_dec}>•</span>
              <Link to="/chapter" className={s.second_menu__item}>
                Настольные лампы
              </Link>
              <span className={s.second_menu__item_dec}>•</span>
              <Link to="/chapter" className={s.second_menu__item}>
                Торшеры
              </Link>
              <span className={s.second_menu__item_dec}>•</span>
              <Link to="/chapter" className={s.second_menu__item}>
                Подвесные светильники
              </Link>
              <span className={s.second_menu__item_dec}>•</span>
              <Link to="/chapter"  className={s.second_menu__item}>
                Аксессуары
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={s.logo_area}>
        <div className={s.header_icons_area}>
          <div className={s.header_icon_phone}>
            <Link to="tel:+79037981696" className={s.header_phone}>
              +7 (903) 798-16-96
            </Link>
            <Link to="" className={s.header_icons__icon} title="Позвонить нам">
              <svg className={s.ui_icon} viewBox="0 0 512 512">
                <path d="M485.221,386.694l-18.917-12.603c42.662-75.036,42.186-167.102-1.251-241.692S341.781,11.956,255.464,12.027c-4.482,0-8.115,3.633-8.115,8.115s3.633,8.115,8.115,8.115c80.322-0.06,154.645,42.502,195.245,111.809c40.599,69.306,41.376,154.951,2.043,224.984l-66.133-44.092c-12.51-8.271-29.275-5.548-38.524,6.257l-28.68,36.917c-3.693,4.863-10.397,6.273-15.736,3.311l-5.462-3.011c-18.106-9.869-40.634-22.155-86.024-67.561s-57.701-67.951-67.57-86.024l-2.995-5.462c-3.006-5.337-1.622-12.073,3.246-15.793l36.892-28.704c11.804-9.249,14.531-26.012,6.265-38.524l-65.735-98.571c-8.472-12.741-25.467-16.566-38.58-8.683l-41.219,24.76C29.547,47.485,20.045,59.816,15.985,74.28c-14.843,54.081-3.677,147.417,133.816,284.926c59.892,59.892,111.385,95.762,154.924,116.051c-67.013,15.141-137.275-1.066-190.885-44.03c-53.611-42.965-84.733-108.009-84.553-176.71c0-4.482-3.633-8.115-8.115-8.115s-8.115,3.633-8.115,8.115c0.126,133.841,108.569,242.32,242.409,242.49c25.074,0.009,49.995-3.918,73.85-11.638c21.523,8.039,44.271,12.305,67.245,12.612c12.88,0.055,25.709-1.621,38.143-4.982c14.467-4.055,26.8-13.558,34.409-26.513l24.785-41.194C501.792,412.175,497.969,395.17,485.221,386.694z M479.946,416.94l-24.728,41.219c-5.467,9.367-14.35,16.251-24.785,19.209c-23.607,6.493-55.583,7.304-96.671-7.507c-0.651-0.365-1.351-0.638-2.078-0.811c-45.447-16.872-101.874-52.832-170.425-121.358C29.302,215.742,17.933,128.508,31.64,78.574c2.963-10.431,9.847-19.313,19.209-24.785l41.219-24.728c5.69-3.424,13.066-1.764,16.742,3.765l35.708,53.611l29.971,44.951c3.589,5.428,2.41,12.702-2.71,16.718l-36.901,28.704c-11.23,8.587-14.437,24.124-7.523,36.455l2.93,5.324c10.372,19.023,23.267,42.687,70.345,89.757c47.078,47.069,70.735,59.965,89.749,70.336l5.331,2.938c12.33,6.913,27.868,3.707,36.455-7.523l28.704-36.901c4.017-5.117,11.289-6.296,16.718-2.71l98.562,65.735C481.679,403.884,483.352,411.248,479.946,416.94z"></path>
              </svg>
            </Link>
            <span className={s.dropdown_close}></span>
          </div>

          <div className={s.header_icons}>
            <div className={s.header_icon_container}>
              <form className={s.header_search__form}>
                <input
                  className={s.header_search__form_query}
                  type="text"
                  name="query"
                  value=""
                  placeholder="ЧТО БУДЕМ ИСКАТЬ?"
                />
                <input
                  className={s.header_search__submit}
                  id="header_search__submit"
                  type="submit"
                />
              </form>
              <label className={s.header_search__init}>
                <svg className={s.ui_icon} viewBox="0 0 612.01 612.01">
                  <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407S377.82,467.8,257.493,467.8z"></path>
                </svg>
              </label>
              <span className={s.dropdown_close}></span>
            </div>
            <div className={s.header_icon_container}>
              <Link to="wishlist" className={s.header_icons__icon} title="Мои список желаний">
                <svg className={s.ui_icon} viewBox="0 -28 512 512">
                  <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path>
                </svg>
                <span className={s.header_icons__total}>0</span>
              </Link>
            </div>
            <div className={s.header_icon_container}>
              <div className={s.header_shopcart}>
                <div className={s.header_shopcart__items}></div>
                <div className={s.header_shopcart__summary}>
                  <b>ИТОГО:</b>
                  <span className={s.header_shopcart__summary_total}>0</span>
                  <span className={s.rub}>Р</span>
                </div>
                <div className={s.header_shopcart__summary}>
                  <button className={s.btn_lg} type="submit">
                    <Link to="/">Перейти в корзину</Link>
                  </button>
                </div>
                <div className={s.header_shopcart__empty}>
                  <span>В корзине нет товаров</span>
                </div>
              </div>
              <Link to="/" className={s.header_icons__icon} title="Корзина">
                <svg className={s.ui_icon} viewBox="0 0 469.334 469.333">
                  <path d="M458.667,106.667H341.333v-64C341.333,19.135,322.198,0,298.667,0h-128C147.135,0,128,19.135,128,42.667v64H10.667C4.771,106.667,0,111.437,0,117.333v309.333c0,23.531,19.135,42.667,42.667,42.667h384c23.531,0,42.667-19.135,42.667-42.667V117.333C469.333,111.437,464.562,106.667,458.667,106.667 M149.333,42.667c0-11.76,9.573-21.333,21.333-21.333h128c11.76,0,21.333,9.573,21.333,21.333v64H149.333V42.667z M448,426.667c0,11.76-9.573,21.333-21.333,21.333h-384c-11.76,0-21.333-9.573-21.333-21.333V384H448V426.667z M448,362.667H21.333V128H128v32c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667v-32H320v32c0,5.896,4.771,10.667,10.667,10.667c5.895,0,10.667-4.771,10.667-10.667v-32H448V362.667z"></path>
                </svg>
                <span className={s.header_icons__total}>
                  <span className={s.header_icons__total_count}>0</span>
                </span>
              </Link>
              <Link to="/cart" className={s.header_icons__icon} title="Корзина">
                <svg className={s.ui_icon} viewBox="0 0 469.334 469.333">
                  <path d="M458.667,106.667H341.333v-64C341.333,19.135,322.198,0,298.667,0h-128C147.135,0,128,19.135,128,42.667v64H10.667C4.771,106.667,0,111.437,0,117.333v309.333c0,23.531,19.135,42.667,42.667,42.667h384c23.531,0,42.667-19.135,42.667-42.667V117.333C469.333,111.437,464.562,106.667,458.667,106.667 M149.333,42.667c0-11.76,9.573-21.333,21.333-21.333h128c11.76,0,21.333,9.573,21.333,21.333v64H149.333V42.667z M448,426.667c0,11.76-9.573,21.333-21.333,21.333h-384c-11.76,0-21.333-9.573-21.333-21.333V384H448V426.667z M448,362.667H21.333V128H128v32c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667v-32H320v32c0,5.896,4.771,10.667,10.667,10.667c5.895,0,10.667-4.771,10.667-10.667v-32H448V362.667z"></path>
                </svg>
                <span className={s.header_icons__total}>
                  <span className={s.header_icons__total_count}>0</span>
                </span>
              </Link>
            </div>
            <Link to="/" className={s.header_icon_container}></Link>
          </div>
        </div>
        <Link to="/" className={s.header_logo}>
          <div className={s.vcglogo}>
            <span>B</span>utterfly <span>L</span>ightning <span>C</span>o
          </div>
          <div className={s.tgallery}>
            Галерея<span>&nbsp;</span>света
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;

{
  /* // <header className={s.header}>
    //   <div className={s.header_top}>
    //     <div className={`${s.container} ${s.header_top__container}`}>
    //       <nav className={s.header_top__nav}>
    //         <ul className={s.menu_top__list}>
    //           <li className={s.menu_top__item}>
    //             <div className={s.header_top__lang}>
    //               <span className={s.lang_output__text}> RUB </span>
    //               <span className={s.lang_output__flag}>
    //                 <img src={RusFlag} alt="" className={s.lang_output__img} />
    //               </span>
    //             </div>
    //           </li>
    //           <li className={s.menu_top__item}>
    //             <Link className={s.menu_top__link} to="/contacts">
    //               <span className={s.menu_top__box}>
    //                 <svg
    //                   fill="none"
    //                   height="20"
    //                   viewBox="0 0 37 37"
    //                   width="20"
    //                   xmlns="http://www.w3.org/2000/svg">
    //                   <path
    //                     d="M37 36.9999L26.66 33.2583L18.5 36.9999L9.89596 33.2583L0 36.9999L6.16667 23.1249L12.2717 20.6829C12.8575 21.4784 13.414 22.3479 13.9074 23.3485L8.47608 25.5222L5.81671 31.5039L9.93604 29.9468L12.2578 25.8043L11.2788 30.4972L17.7369 33.2552L18.5 30.1395L19.2169 33.2598L25.6148 30.3461L24.662 25.6702L27.0855 30.1349L31.2974 31.6596L28.6164 25.5268L23.0957 23.3454C23.5875 22.3433 24.1456 21.4723 24.733 20.6768L30.932 23.1249L37 36.9999Z"
    //                     fill="currentColor"></path>
    //                   <path
    //                     d="M18.5 0C13.6468 0 9.25 8.79058 9.25 8.79058C9.25 8.79058 16.6238 16.7718 18.5 27.75C20.3762 16.7718 27.75 8.79058 27.75 8.79058C27.75 8.79058 23.3547 0 18.5 0ZM18.5 12.3333C16.7965 12.3333 15.4167 10.9535 15.4167 9.25C15.4167 7.54646 16.7965 6.16667 18.5 6.16667C20.2035 6.16667 21.5833 7.54646 21.5833 9.25C21.5833 10.9535 20.2035 12.3333 18.5 12.3333Z"
    //                     fill="currentColor"
    //                     id="marker-map"></path>
    //                 </svg>
    //               </span>
    //               <span className={s.menu_top__text}> Контакты </span>
    //             </Link>
    //           </li>
    //           <li className={s.menu_top__item}>
    //             <Link className={s.menu_top__link} to="/delivery">
    //               <span className={s.menu_top__box}>
    //                 <svg height="20" viewBox="0 0 37 26" width="20">
    //                   <path
    //                     d="M30.2494 19.0117C29.3453 19.0117 28.4865 19.3767 27.8385 20.0368C27.1906 20.7047 26.829 21.5745 26.829 22.5064C26.829 23.4383 27.1831 24.308 27.8385 24.9759C28.494 25.636 29.3453 26.001 30.2494 26.001C32.1028 26.001 33.6097 24.4323 33.6097 22.5064C33.6097 20.5804 32.1028 19.0117 30.2494 19.0117ZM30.2494 24.4478C29.2097 24.4478 28.3358 23.5625 28.3358 22.5064C28.3358 21.4502 29.2097 20.5649 30.2494 20.5649C31.2741 20.5649 32.1028 21.4347 32.1028 22.5064C32.1028 23.578 31.2741 24.4478 30.2494 24.4478ZM31.1234 7.37075C30.9878 7.23873 30.807 7.16884 30.6186 7.16884H26.7536C26.3392 7.16884 26.0002 7.5183 26.0002 7.94542V14.3134C26.0002 14.7405 26.3392 15.09 26.7536 15.09H32.8864C33.3008 15.09 33.6398 14.7405 33.6398 14.3134V10.05C33.6398 9.83252 33.5494 9.62284 33.3912 9.47529L31.1234 7.37075ZM32.133 13.5368H27.507V8.71424H30.3248L32.133 10.3917V13.5368ZM11.8512 19.0117C10.9471 19.0117 10.0882 19.3767 9.44024 20.0368C8.7923 20.7047 8.43067 21.5745 8.43067 22.5064C8.43067 23.4383 8.78477 24.308 9.44024 24.9759C10.0957 25.636 10.9471 26.001 11.8512 26.001C13.7045 26.001 15.2114 24.4323 15.2114 22.5064C15.2114 20.5804 13.7045 19.0117 11.8512 19.0117ZM11.8512 24.4478C10.8114 24.4478 9.93749 23.5625 9.93749 22.5064C9.93749 21.4502 10.8114 20.5649 11.8512 20.5649C12.8758 20.5649 13.7045 21.4347 13.7045 22.5064C13.7045 23.578 12.8758 24.4478 11.8512 24.4478ZM6.8259 19.9669H5.31155V17.9012C5.31155 17.4741 4.97251 17.1246 4.55814 17.1246C4.14376 17.1246 3.80472 17.4741 3.80472 17.9012V20.7435C3.80472 21.1706 4.14376 21.5201 4.55814 21.5201H6.8259C7.24028 21.5201 7.57931 21.1706 7.57931 20.7435C7.57931 20.3164 7.24028 19.9669 6.8259 19.9669ZM10.6457 15.7345C10.6457 15.3074 10.3067 14.958 9.89228 14.958H0.753411C0.339035 14.958 0 15.3074 0 15.7345C0 16.1617 0.339035 16.5111 0.753411 16.5111H9.89228C10.3067 16.5111 10.6457 16.1694 10.6457 15.7345ZM2.28283 12.9311L11.4217 12.9854C11.8361 12.9854 12.1751 12.6437 12.1827 12.2166C12.1902 11.7817 11.8512 11.4323 11.4368 11.4323L2.2979 11.3779C2.29037 11.3779 2.29037 11.3779 2.29037 11.3779C1.87599 11.3779 1.53696 11.7196 1.53696 12.1467C1.52942 12.5816 1.86846 12.9311 2.28283 12.9311ZM3.81979 9.4054H12.9587C13.373 9.4054 13.7121 9.05593 13.7121 8.62881C13.7121 8.20169 13.373 7.85223 12.9587 7.85223H3.81979C3.40542 7.85223 3.06638 8.20169 3.06638 8.62881C3.06638 9.05593 3.40542 9.4054 3.81979 9.4054ZM36.7212 8.35701L31.3268 3.75187C31.1912 3.63538 31.0255 3.57326 30.8446 3.57326H24.5009V0.77756C24.5009 0.350439 24.1619 0.000976562 23.7475 0.000976562H4.55814C4.14376 0.000976562 3.80472 0.350439 3.80472 0.77756V6.46215C3.80472 6.88927 4.14376 7.23873 4.55814 7.23873C4.97251 7.23873 5.31155 6.88927 5.31155 6.46215V1.55414H23.0016V19.9669H16.8237C16.4093 19.9669 16.0703 20.3164 16.0703 20.7435C16.0703 21.1706 16.4093 21.5201 16.8237 21.5201H26.0228C26.4372 21.5201 26.7762 21.1706 26.7762 20.7435C26.7762 20.3164 26.4372 19.9669 26.0228 19.9669H24.5084V5.12642H30.5809L35.4932 9.31997L35.4404 19.9514H34.6569C34.2425 19.9514 33.9035 20.3009 33.9035 20.728C33.9035 21.1551 34.2425 21.5046 34.6569 21.5046H36.1863C36.6007 21.5046 36.9397 21.1629 36.9397 20.7357L37 8.96274C36.9925 8.72977 36.8945 8.50456 36.7212 8.35701Z"
    //                     fill="currentColor"></path>
    //                 </svg>
    //               </span>
    //               <span className={s.menu_top__text}> Доставка и установка </span>
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className={s.header_contact}>
    //         <Link to="tel:+79999902020" className={s.header_contact__link} target="_blank">
    //           <span className={s.header_contact__text}> +7 (999) 990-20-20 </span>
    //           <img
    //             src={TellSvg}
    //             alt=""
    //             className={`${s.header_contact__icon} ${s.header_contact__icontel}`}
    //           />
    //         </Link>
    //         <Link to="https://api.whatsapp.com/send?phone=79999902020"
    //           className={`${s.header_contact__link} ${s.header_contact__linkWA}`}
    //           target="_blank">
    //           <span className={s.header_contact__text}>WA </span>
    //           <img
    //             src={WASvg}
    //             alt=""
    //             className={`${s.header_contact__icon} ${s.header_contact__iconWA}`}
    //           />
    //         </Link>
    //         <Link to="https://t.me/Norikyujka"
    //           className={`${s.header_contact__link} ${s.header_contact__linkTG}`}
    //           target="_blank">
    //           <span className={s.header_contact__text}>TG </span>
    //           <img
    //             src={TgSvg}
    //             alt=""
    //             className={`${s.header_contact__icon} ${s.header_contact__iconTG}`}
    //           />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={s.header_bottom}>
    //     <div className={`${s.container} ${s.header_bottom__container}`}>
    //       <Link to="/" className={s.header_bottom__logo}>
    //         <img
    //           src="https://loft-concept.ru/bitrix/templates/bashtemplate/images/loftconcept-logo.svg"
    //           alt=""
    //           className={s.logo__img}
    //         />
    //       </Link>
    //       <Search />
    //       <div className={s.header_bottom__actions}>
    //         <Link to="mailto:norikas95@mail.ru"
    //           className={s.header_actions__link__mail}
    //           target="_blank">
    //           <span className={s.header_contact__text}>norikas95@mail.ru</span>
    //           <img src={MailSvg} alt="" className={s.header_contact__iconmail} />
    //         </Link>
    //         <HeaderCartCount />
    //         {/* {location.pathname !== '/cart' && <HeaderCartCount />} */
}
//       </div>
//     </div>
//   </div>
//   <div className={s.header_low}>
//     <div className={`${s.container} ${s.header_low__container}`}>
//       <MouseOverModal />
//     </div>
//   </div>
// </header> */}
