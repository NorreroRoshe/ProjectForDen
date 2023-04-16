import React from 'react';
import { WayToBack } from '../../components/WayToBack/WayToBack';
import s from './Delivery.module.scss';

export const Delivery: React.FC = () => {
  return (
    <section className={s.section_delivery}>
      <div className={`${s.delivery_container} ${s.container}`}>
        <div className={s.delivery_info}>
          <h3 className={s.delivery_header}>Условия доставки компании Moi Brend</h3>
          <br />
          <div className={s.delivery_desc}>
            <p className={s.desc_txt}>
              Наше правило – постараться осуществить доставку клиенту в течение <span> трех</span>{' '}
              дней с момента поступления товара на склад. Но, чтобы Вам было максимально удобно
              принять заказ, мы заранее согласовываем точный день доставки.
            </p>
            <p className={s.desc_txt}>
              Доставка нашей Компанией осуществляется в <span> будние дни с 10:00 до 18:00.</span>{' '}
              Точное время доставки, к сожалению, указать невозможно. День доставки согласуется
              согласно маршруту движения автотранспорта доставки. Доставка товара осуществляется до
              подъезда, стоимость отгрузки товара на этаже оплачивается дополнительно. Подъем товара
              осуществляется при наличии условий беспрепятственного проноса.
            </p>
            <p className={s.desc_txt}>
              Минимальная сумма товара для осуществления доставки- 5000руб.
            </p>
            <p className={s.desc_txt}>
              Отгрузка юр лицам производится только при наличии оригинала доверенности или печати.
            </p>
            <p className={s.desc_txt}>
              Так же мы можем предоставить услуги грузчиков для крупногабаритного товара. Стоимость
              от 2500руб
            </p>
            <p className={s.desc_txt}>
              Доставка по <span> Москве</span>:
            </p>
            <p className={s.desc_txt}>-внутри Садового кольца:</p>
            <p className={s.desc_txt}>малогабаритная - 1500 руб. и крупногабаритная - 3000 руб.;</p>
            <p className={s.desc_txt}>-дальше Садового кольца:</p>
            <p className={s.desc_txt}>малогабаритная - 1000 руб и крупногабаритная - 2500 руб.</p>
            <p className={s.desc_txt}>
              Доставка по <span>Московской области</span>:
            </p>
            <p className={s.desc_txt}>
              малогабаритная - 1000 руб и крупногабаритная - 2500 руб (внутри МКАД) + за МКАД в
              зависимости от расстояния из расчета 60 руб. за км. (точную стоимость уточняйте у
              менеджера). За МКАД не дальше 10 км.
            </p>
            <p className={s.desc_txt}>
              <span>Наши клиенты</span> – это наши <span> партнеры</span> и <span> друзья</span>, мы
              не можем себе позволить подвести их, поэтому пристально следим за качеством товара и
              упаковки перед отгрузкой!
            </p>
            <p className={s.desc_txt}>
              Покупатель (представитель Покупателя) обязан произвести внешний осмотр Товара в момент
              его принятия и подписать накладную и Акт приёма-передачи
            </p>
            <p className={s.desc_txt}>
              При отказе от товара надлежавшего качества покупателем оплачивается двойная доставка.
            </p>
            <p className={s.desc_txt}>
              Доставка<span> по России</span> (за пределы Москвы и Московской области)
              осуществляется транспортной компанией "Деловые линии" и "Байкал Сервис" и оплачивается
              отдельно. Сроки и стоимость доставки заказа Вы можете выяснить на сайте выбранной ТК.
              По Вашему запросу наши менеджеры могут помочь в расчете ориентировочной стоимости.
              Отгрузка товара на доставку в регионы осуществляется со склада. Доставка до терминалов
              любых других ТК с оформлением заявки на перевозку не производится.
            </p>
            <p className={s.desc_txt}>
              По доставке <span> в другие страны</span> уточняйте у наших менеджеров. Отгрузка
              товара на доставку в регионы осуществляется со склада.
            </p>
            <p className={s.desc_txt}>
              Транспортных услуг по перевозке грузов по территории РФ ООО “Лофт-Концепт” не
              предоставляет и ответственность за перевозку грузов по РФ от склада продавца до адреса
              покупателю не несет. Указанную услугу по перевозке предоставляет сторонняя
              организация.
            </p>
            <p className={s.desc_txt}>
              Покупатель может самостоятельно осуществить забор груза с нашего склада любой
              Транспортной компанией и заказать проверку заказа (коммерческий акт досмотра
              внутреннего содержимого)
            </p>
            <p className={s.desc_txt}>
              В случае, если заявку в ТК на отгрузку заказа делают сотрудники ООО “Лофт-Концепт” -
              ответственность за транспортировку так же полностью несет ТК, которая данный груз
              перевозит. И претензии по полученному битому товару ООО “Лофт-Концепт” НЕ ПРИНИМАЕТ!
              Все товары перед отгрузкой на складе проверяются Отделом Технического Контроля.
            </p>
            <p className={s.desc_txt}>
              Если Клиенту необходимо отгрузить заказ другой ТК - заявку на отгрузку клиент делает
              самостоятельно Адрес забора груза - склада указан в контактах
            </p>
            <p className={s.desc_txt}>
              В том случае, если заявку в Транспортную Компанию на отгрузку заказа делают сотрудники
              ООО "Лофт-Концепт " в обязательном порядке в заявке заказывается:
              <br />
              -обрешётка/жесткая упаковка
              <br />
              -страхование на полную стоимость товара
            </p>
            <p className={s.desc_txt}>-информирование о статусе груза</p>
            <p className={s.desc_txt}>Это правило по умолчанию действует для всех заказов.</p>
            <p className={s.desc_txt}>
              И если Транспортная Компания отказывается возмещать клиенту потерю или повреждение
              товара объясняя это тем, что :
              <br />
              в заявке не была указана страховка,
              <br />
              в заявке не была указана полная стоимость
              <br />
              или же ТК перекладывает вину по повреждению товара на Продавца
              <br />- это заведомая ложь, подтасовка данных задним числом и попытка уйти от
              ответственности.
            </p>
            <p className={`${s.desc_txt} ${s.desc_blue}`}>
              Убедительная просьба обратить внимание на эту информацию наших клиентов! Повлиять на
              порядочность и добросовестность Российских ТК невозможно, у Продавца нет таких
              ресурсов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
