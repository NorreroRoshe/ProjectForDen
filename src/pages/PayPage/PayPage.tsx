import React from 'react'
import s from './PayPage.module.scss'
import alfa from '../../assets/img/AlfaBank.png'
import mir from '../../assets/img/logo_mir-50.png'
import masca from '../../assets/img/Mastercard-logo.svg-8.png'
import visa from '../../assets/img/Visa_Brandmark_Blue_RGB.png'
import visas from '../../assets/img/visa-secure_blu_2021.png'
import mirs from '../../assets/img/MIRaccept-40.png'
import mascas from '../../assets/img/_mastercard-securecode-50.png'
import { WayToBack } from '../../components/WayToBack/WayToBack';

export const PayPage: React.FC = () => {
  return (
    <section className={s.section_pay}>
      <div className={`${s.pay_container} ${s.container}`}>
        <h1 className={s.pay_header}>
          Способы оплаты
        </h1>
        <div className={s.pay_description}>
          <p className={s.description_desc}>
            Вы можете выбрать удобный для Вас способ оплаты товара.
          </p>
          <p className={s.description_desc}>
            В нашем магазине существует два способа оплаты - наличный и безналичный
          </p>
        </div>
        <div className={s.pay_method}>
          <h2 className={s.pay_method_header}>
            Виды расчета
          </h2>
          <div className={s.pay_method_beznal}>
            <h3 className={s.method_beznal_title}>
              Безналичный расчет для <strong>юридических лиц:</strong>
            </h3>
            <div className={s.method_beznal_info}>
              <p className={s.beznal_info_desc}>
                Юридическим лицам предоставлена возможность оплатить товары нашего магазина с помощью безналичного расчета;
              </p>
              <p className={s.beznal_info_desc}>
                После принятия решения о заказе, менеджеры компании Loft-Concept, удобным для вас способом, вышлют вам счет для оплаты;
              </p>
              <p className={s.beznal_info_desc}>
                Для выставления счета необходимо сообщить менеджеру реквизиты компании - плательщика.
              </p>
            </div>
          </div>
          <div className={s.pay_method_beznal}>
            <h3 className={s.method_beznal_title}>
              Безналичный расчет для <strong>физических лиц:</strong>
            </h3>
            <div className={s.method_beznal_info}>
              <p className={s.beznal_info_desc}>
                Физическим лицам предоставляется возможность оплачивать заказанный товар через кассу любого банка;
              </p>
              <p className={s.beznal_info_desc}>
                После оформления заказа, менеджер компании Loft-Concept отправит вам на предоставленный e-mail счет для оплаты.
              </p>
            </div>
          </div>
        </div>
        <div className={s.pay_cart}>
          <h4 className={s.pay_cart_header}>
            Оплата банковской картой онлайн
          </h4>
          <p className={s.pay_cart_desc}>
            Оплата банковскими картами осуществляется через АО «АЛЬФА-БАНК».
          </p>
          <img src={alfa} alt="" className={s.pay_cart_img} />
          <p className={s.pay_cart_desc}>
            К оплате принимаются карты VISA, MasterCard, МИР.
          </p>
          <div className={s.pay_cart_imgbox}>
            <img src={visa} alt="" className={s.cart_imgbox_img} />
            <img src={masca} alt="" className={s.cart_imgbox_img} />
            <img src={mir} alt="" className={s.cart_imgbox_img} />
          </div>
          <p className={s.pay_cart_desc}>
            Услуга оплаты через интернет осуществляется в соответствии с Правилами международных платежных систем Visa, MasterCard и Платежной системы МИР на принципах соблюдения конфиденциальности и безопасности совершения платежа, для чего используются самые современные методы проверки, шифрования и передачи данных по закрытым каналам связи.
          </p>
          <p className={s.pay_cart_desc}>
            Ввод данных банковской карты осуществляется на защищенной платежной странице АО «АЛЬФА-БАНК».
          </p>
          <p className={s.pay_cart_desc}>
            На странице для ввода данных банковской карты потребуется ввести данные банковской карты: номер карты, имя владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard, Код Дополнительной Идентификации для МИР). Все необходимые данные пропечатаны на самой карте. Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне карты.
          </p>
          <p className={s.pay_cart_desc}>
            Далее Вы будете перенаправлены на страницу Вашего банка для ввода кода безопасности, который придет к Вам в СМС. Если код безопасности к Вам не пришел, то следует обратиться в банк выдавший Вам карту.
          </p>
          <div className={s.pay_cart_secureimg}>
            <img src={visas} alt="" className={s.cart_secureimg_img} />
            <img src={mascas} alt="" className={s.cart_secureimg_img} />
            <img src={mirs} alt="" className={s.cart_secureimg_img} />
          </div>
        </div>
        <div className={s.pay_rejection}>
          <h4 className={s.pay_rejection_header}>
            Случаи отказа в совершении платежа:
          </h4>
          <ul className={s.pay_rejection_list}>
            <li className={s.pay_rejection_item}>
              Банковская карта не предназначена для совершения платежей через интернет, о чем можно узнать, обратившись в Ваш Банк;
            </li>
            <li className={s.pay_rejection_item}>
              Недостаточно средств для оплаты на банковской карте. Подробнее о наличии средств на банковской карте Вы можете узнать, обратившись в банк, выпустивший банковскую карту;
            </li>
            <li className={s.pay_rejection_item}>
              Данные банковской карты введены неверно;
            </li>
            <li className={s.pay_rejection_item}>
              Истек срок действия банковской карты. Срок действия карты, как правило, указан на лицевой стороне карты (это месяц и год, до которого действительна карта). Подробнее о сроке действия карты Вы можете узнать, обратившись в банк, выпустивший банковскую карту;
            </li>
          </ul>
        </div>
        <p className={s.pay_desc}>
          По вопросам оплаты с помощью банковской карты и иным вопросам, связанным с работой сайта, Вы можете обращаться по телефону: +7(999)990-20-20.
        </p>
        <p className={s.pay_desc}>
          Предоставляемая вами персональная информация (имя, адрес, телефон, e-mail, номер банковской карты) является конфиденциальной и не подлежит разглашению. Данные вашей кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем Web-сервере.
        </p>
      </div>
    </section>
  )
}

export default PayPage;