import React from 'react';
import s from './SaleBunner.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // путь к slick.css
import 'slick-carousel/slick/slick-theme.css'; // путь к <slick-theme className="css">            - </slick-theme>

// import img
import a from '../../../assets/img/ButtImg/pngItems/120-6ClNi-removebg-preview.png';
import b from '../../../assets/img/ButtImg/pngItems/401-6ni_off-1200x900-removebg-preview.png';
import c from '../../../assets/img/ButtImg/pngItems/805-6ni-removebg-preview.png';
import d from '../../../assets/img/ButtImg/pngItems/1021-1t_mat_silver_on-1200x900-removebg-preview (1).png';
import e from '../../../assets/img/ButtImg/pngItems/106-600br1-removebg-preview.png';
import f from '../../../assets/img/ButtImg/pngItems/106-600br1-removebg-preview.png';
import { Link } from 'react-router-dom';

export const SaleBunner: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    nextArrow: (
      <button type="button" className={s.slick_next}>
        Next
      </button>
    ),
    prewArrow: (
      <button type="button" className={s.slick_prew}>
        Prev
      </button>
    ),
    // autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    // centerMode: true,
    // centerPadding: '400px',
  };

  return (
    <section className={s.section_saleb}>
      <div className={`${s.saleb__container}`}>
        <h2 className={s.saleb_title}>Распродажа</h2>
        <Slider className={s.main_slider} {...sliderSettings}>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={a} alt="" className={s.saleb_img} />
            <h4 className={s.slider_header}>120/6 Nickel</h4>
            <p className={s.slider_price}>10 000 руб.</p>
          </Link>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={b} alt="" className={s.slider_img} />
            <h4 className={s.slider_header}>803/6 Nickel</h4>
            <p className={s.slider_price}>20 000 руб.</p>
          </Link>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={c} alt="" className={s.saleb_img} />
            <h4 className={s.slider_header}>805/6 Nickel</h4>
            <p className={s.slider_price}>95 683 руб.</p>
          </Link>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={d} alt="" className={s.saleb_img} />
            <h4 className={s.slider_header}>1021/T mat slilver</h4>
            <p className={s.slider_price}>27 100 руб.</p>
          </Link>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={e} alt="" className={s.saleb_img} />
            <h4 className={s.slider_header}>106/600 bronze</h4>
            <p className={s.slider_price}>31 245 руб.</p>
          </Link>
        <Link to='/product/1' className={s.saleb_slider}>
            <img src={f} alt="" className={s.saleb_img} />
            <h4 className={s.slider_header}>106/600 bronze</h4>
            <p className={s.slider_price}>16 654 руб.</p>
          </Link>
        </Slider>
      </div>
    </section>
  );
};
