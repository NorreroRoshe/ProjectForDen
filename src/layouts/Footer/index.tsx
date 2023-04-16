import React from 'react';
import vkicon from '../../assets/img/social_icon/vk-icon.png';
import instaicon from '../../assets/img/social_icon/instagram-icon.png';
import telegaicon from '../../assets/img/social_icon/telegram_icon.svg';
import fbicon from '../../assets/img/social_icon/fb-icon.png';
import visaicon from '../../assets/img/social_icon/Visa.jpg';
import mastercard from '../../assets/img/social_icon/master-card.png';
import paypal from '../../assets/img/social_icon/paypal.jpg';
import visaelect from '../../assets/img/social_icon/Visaelectronic.jpg';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} ${styles.container}`}>
        <div className={styles.footer_nav}>
          <h4 className={styles.footer_nav__title}>Информация</h4>
          <ul className={styles.footer_nav__list}>
            <li className={styles.footer_nav__item}>
              <Link to="/" className={styles.nav_link}>
                О нас
              </Link>
              <Link to="/paypage" className={styles.nav_link}>
                Оплата
              </Link>
              <Link to="/delivery" className={styles.nav_link}>
                Доставка
              </Link>
              <Link to="/warranty" className={styles.nav_link}>
                Сотрудничество
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_nav}>
          <h4 className={styles.footer_nav__title}>Контакты</h4>
          <div className={styles.footer_nav_nytime}>
            <h5 className={styles.nav_nytime_title}>Режим работы</h5>
            <p className={styles.nav_nytime_time}>Пн-Вс 10:00-22:00</p>
          </div>
          <div className={styles.footer_nav__callwu}>
            <h5 className={styles.nav__callwu_title}>Свяжитесь с нами</h5>
            <a href="tel:+79999902020" className={styles.footer_callwu_link}>
              <svg className={styles.footer_callwu__icon} height="24" width="30">
                <g transform="matrix(1,0,0,1,0,0)">
                  <svg height="24" viewBox="0 0 30 24" width="24">
                    <path
                      d="M14.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.082 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.521 6.795c-.008.004-1.989.978-2.11 1.033zm-1.538-13.409l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.058c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.187c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z"
                      fill="currentColor"></path>
                  </svg>
                </g>
              </svg>
              <span className={styles.footer_callwu__phonenum}> +7 (999) 990-20-20 </span>
            </a>
            <a href="mailto:info@moi-brend.ru" className={styles.footer_callwu_link}>
              <svg
                className={styles.footer_communic__icon}
                height="24"
                viewBox="0 0 240 240"
                width="30">
                <g transform="translate(128 128) scale(0.72 0.72)">
                  <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
                    <path
                      d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                      fill="currentColor"
                      strokeLinecap="round"
                      // style="stroke:none;stroke-width:1;stroke-dasharray:none;strokeLinecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill-rule:nonzero;opacity:1"
                      transform=" matrix(1 0 0 1 0 0) "></path>
                    <path
                      d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
                      fill="currentColor"
                      strokeLinecap="round"
                      // style="stroke:none;stroke-width:1;stroke-dasharray:none;strokeLinecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill-rule:nonzero;opacity:1"
                      transform=" matrix(1 0 0 1 0 0) "></path>
                    <path
                      d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
                      fill="currentColor"
                      strokeLinecap="round"
                      // style="stroke:none;stroke-width:1;stroke-dasharray:none;strokeLinecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill-rule:nonzero;opacity:1"
                      transform=" matrix(1 0 0 1 0 0) "></path>
                    <path
                      d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
                      fill="currentColor"
                      strokeLinecap="round"
                      // style="stroke:none;stroke-width:1;stroke-dasharray:none;strokeLinecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill-rule:nonzero;opacity:1"
                      transform=" matrix(1 0 0 1 0 0) "></path>
                    <path
                      d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
                      fill="currentColor"
                      strokeLinecap="round"
                      // style="stroke:none;stroke-width:1;stroke-dasharray:none;strokeLinecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill-rule:nonzero;opacity:1"
                      transform=" matrix(1 0 0 1 0 0) "></path>
                  </g>
                </g>
              </svg>
              <span className={styles.footer_callwu__phonenum}> info@moi-brend.ru</span>
            </a>
          </div>
          <div className={styles.footer__nav_social}>
            <h5 className={styles.nav_social_title}> Мы в соцсетях </h5>
            <a href="" className={styles.nav_social_link}>
              <img src={vkicon} alt="" className={styles.nav_social_img} />
            </a>
            <a href="" className={styles.nav_social_link}>
              <img src={instaicon} alt="" className={styles.nav_social_img} />
            </a>
            <a href="" className={styles.nav_social_link}>
              <img src={telegaicon} alt="" className={styles.nav_social_img} />
            </a>
            <a href="" className={styles.nav_social_link}>
              <img src={fbicon} alt="" className={styles.nav_social_img} />
            </a>
          </div>
        </div>
        <div className={styles.footer_nav_work}>
          <h4 className={styles.footer_nav_work_title}>Адреса</h4>
          <ul className={styles.nav_work_list}>
            <li className={styles.nav_work_item}>
              <p className={styles.footer_nav_adress_txt}>
                <span className={styles.adress_txt_one}>1. </span>
                <span className={styles.adress_txt_one}>143582 Мос. обл.</span>
                <span className={styles.adress_txt_one}>Покровское д.</span>
                <span className={styles.adress_txt_one}>Novaya Riga Outlet Village</span>
                <span className={styles.adress_txt_one}>д. 33, кор.7</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.footer_create}>© Design by Stadnik, 2022</p>
    </footer>
  );
};

export default Footer;
