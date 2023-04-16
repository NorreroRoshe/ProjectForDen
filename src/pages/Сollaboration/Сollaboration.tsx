import React from 'react'
import s from './Сollaboration.module.scss'
import sotrud from '../../assets/img/cotrud-photo.jpg'
import { WayToBack } from '../../components/WayToBack/WayToBack';

export const Сollaboration = () => {
  return (
    <section className={s.section_collaboration}>
      <div className={`${s.collaboration_container} ${s.container}`}>
        <h2 className={s.collaboration_header}>
          Сотрудничество с представителями сферы дизайна и интерьера
        </h2>
        <div className={s.collaboration_photo}>
          <img src={sotrud} alt="" className={s.collaboration_img} />
        </div>
        <div className={s.collaboration_desc}>
          <h2 className={s.collaboration_header}>
            Благодарим за интерес, проявленный к нашей компании!
          </h2>
          <p className={s.desc_txt}>Компания <b>Moi Brend</b> приглашает к взаимовыгодному сотрудничеству архитекторов, дизайнеров, декораторов, представителей студий дизайна и интерьера, а также сектора HoReCa (отели, бары, рестораны и кафе).</p>
          <p className={s.desc_txt}>Мы приготовили для Вас стильную дизайнерскую мебель, освещение и уникальные предметы интерьера по оптовым ценам для создания стильного и оригинального дизайна кафе, бара, ресторана, офиса, магазина или шоу-рума.</p>
          <p className={s.desc_txt}>аша компания ценит долгосрочные и взаимовыгодные отношения, поэтому предоставляет партнерам <b>специальные предложения, скидки и условия работы</b>. Для предоставлении Вам подробной информации необходимо написать запрос нам <span>на эл.почту <a href="info@moi-brend.ru">info@moi-brend.ru</a> прикрепив ссылку на сайт/соц.сети/диплом.</span></p>
          <p className={s.desc_txt}>В случае, если Ваш Клиент хочет <b>самостоятельно оформить заказ</b>, Вы можете закрепить своего Клиента за собой <b>предварительно уведомив</b> об этом менеджера или указав всю информацию на общую эл.почту</p>
        </div>
        <h4 className={s.collaboration_collab_header}>
          По вопросам сотрудничества обращайтесь:
        </h4>
        <table>
          <tbody>
            <tr><td>E-Mail</td><td><a className={s.cooperation_content} href="mailto:info@moi-brend.ru">info@moi-brend.ru</a></td></tr>
            <tr><td>Телефон</td><td><a className={s.cooperation_content} href="tel:+79999902020">+7(999)990-20-20</a></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Сollaboration;