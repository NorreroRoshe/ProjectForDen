import React from 'react';
import s from './Contacts.module.scss';
import cxema from '../../assets/img/mapnriga.png';
import micon from '../../assets/img/adress-icon.svg';
import { WayToBack } from '../../components/WayToBack/WayToBack';

export const Contacts: React.FC = () => {
  return (
    <section className={s.section_constact}>
      <div className={`${s.contacts_container} ${s.container}`}>
        <h2 className={s.constact_header}>Контакты</h2>
        <div className={s.contact_online}>
          <div className={s.online_timeline}>
            <h3 className={s.timeline_header}>Режим работы интернет-магазина:</h3>
            <p className={s.timeline_time}>ПН-ВС КРУГЛОСУТОЧНО</p>
          </div>
          <div className={s.online_connection}>
            <h3 className={s.connection_header}>Телефоны и почта:</h3>
            <div className={s.connection_tel}>
              <a href="" className={s.connection_tel_number}>
                +7(999)-990-2020
              </a>
            </div>
            <div className={s.connection_mail}>
              <div className={s.connection_mail_client}>
                <a href="" className={s.mail_client_telink}>
                  info@moi-brend.ru
                </a>
                <span className={s.mail_client_tedesc}> - для клиентов </span>
              </div>
              <div className={s.connection_mail_client}>
                <a href="" className={s.mail_client_telink}>
                  arch@moi-brend.ru
                </a>
                <span className={s.mail_client_tedesc}> - для дизайнеров и архитекторов </span>
              </div>
              <div className={s.connection_mail_client}>
                <a href="" className={s.mail_client_telink}>
                  arch@moi-brend.ru
                </a>
                <span className={s.mail_client_tedesc}> - для коммерческих предложений </span>
              </div>
              <div className={s.connection_mail_client}>
                <a href="" className={s.mail_client_telink}>
                  Письмо директору
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.connection_offline}>
          <h2 className={s.connection_offline_address}>
            <img src={micon} alt="" className={s.offline_address_img} />
            <span className={s.offline_address_header}>Адрес офиса и шоу-рума:</span>
          </h2>
          <h3 className={s.offline_address_header_ad}>
            143582, Центральная улица, 33к6, деревня Покровское, Novaya Riga Outlet Village, Здание
            "Азбуки вкуса"
          </h3>
          <div className={`${s.offline_contact} ${s.contact_online}`}>
            <div className={`${s.offline_timeline} ${s.contact_online}`}>
              <h3 className={`${s.timeline_header} ${s.contact_online}`}>Режим работы Шоу-рума:</h3>
              <p className={`${s.timeline_time} ${s.contact_online}`}>ПН-ВС 10:00 до 22:00</p>
            </div>
            <div className={s.offline_cxema}>
              <img src={cxema} alt="" className={s.offline_cxema_img} />
            </div>
          </div>
        </div>
        <div className={s.constact_requisite}>
          <h4 className={s.constact_requisite_title}> Реквизиты </h4>
          <div className={s.constact_requisite_info}>
            <h5 className={s.requisite_info_header}>
              <strong>ИП Галоян Норайр Жирайрович</strong>
            </h5>
            <p className={s.requisite_info_desc}>
              Юридический Адрес:
              <span className={s.info_desc_span}>
                {' '}
                143362, г. Московская область, г. Апрелевка, ул Ясная, д. 3, кв. 62
              </span>
            </p>
            <p className={s.requisite_info_desc}>
              Фактический Адрес:
              <span className={s.info_desc_span}>
                {' '}
                143582, Московская область, г. о. Истра, городской округ Истра, деревня Покровское,
                Центральная улица 33к7
              </span>
            </p>
            <p className={s.requisite_info_desc}>
              ИНН:
              <span className={s.info_desc_span}> 461501845610</span>
            </p>
            <p className={s.requisite_info_desc}>
              КПП:
              <span className={s.info_desc_span}> </span>
            </p>
            <p className={s.requisite_info_desc}>
              ОГРН:
              <span className={s.info_desc_span}></span>
            </p>
            <p className={s.requisite_info_desc}>
              Расчетный счет:
              <span className={s.info_desc_span}></span>
            </p>
            <p className={s.requisite_info_desc}>
              Банк:
              <span className={s.info_desc_span}></span>
            </p>
            <p className={s.requisite_info_desc}>
              БИК:
              <span className={s.info_desc_span}></span>
            </p>
            <p className={s.requisite_info_desc}>
              К/сч:
              <span className={s.info_desc_span}></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
