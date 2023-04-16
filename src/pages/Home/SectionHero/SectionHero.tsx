import React from 'react';
import s from './SectionHero.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // путь к slick.css
import 'slick-carousel/slick/slick-theme.css'; // путь к slick-theme.css
import { BrandDesc } from './BrandDesc/BrandDesc';

export const SectionHero: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    // centerPadding: '205px',
  };

  return (
    <section className={s.section_hero}>
      <h1 className={s.visually_hidden}>Blanchard</h1>
      <div className={`${s.hero__container}`}>
        <Slider className={s.main_slider} {...sliderSettings}>
          <div className={`${s.hero_slider} ${s.slider1}`}>
            <div className={s.container}>
              {/* <h2 className={s.slider_header}>Прикоснитесь к прекрасному</h2> */}
            </div>
          </div>
          <div className={`${s.hero_slider} ${s.slider2}`}>
            <div className={s.container}>
              {/* <h2 className={s.slider_header}>Новинки нашего магазина</h2> */}
            </div>
          </div>
          <div className={`${s.hero_slider} ${s.slider3}`}>
            <div className={s.container}>
            <h2 className={s.slider_header}>Что-то на фоппа-педретском</h2>
            </div>
          </div>
        </Slider>
        <BrandDesc />
      </div>
    </section>
  );
};
