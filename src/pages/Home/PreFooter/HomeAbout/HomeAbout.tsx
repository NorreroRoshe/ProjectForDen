import React from 'react';
import s from './HomeAbout.module.scss';

export const HomeAbout: React.FC = () => {
  return (
    <section className={s.section_homeAbout}>
      <div className={`${s.homeAbout_container} container`}>
        <div className={s.homeAbout_cat}>
          <div className={s.homeAbout_cat__title}>Эксклюзивные светильники</div>
          <div className={s.homeAbout_cat__text}>
            Главное направление Moi-Brend - продажа светильников среднего и премиум сегмента таких
            брендов, как ButterflyLC, Nazaretty, AsitaLight, и многих других. В нашем
            интернет-магазине вы найдете: дизайнерские светильники, изысканные хрустальные люстры,
            подвесные, потолочные, напольные светильники, бра, настольные лампы и торшеры,
            произведенные лучшими мировыми брендами в индустрии светильников. Наша компания
            предлагает широкий выбор светильников, которые будут отвечать вашим потребностям и стилю
            интерьера.
          </div>
        </div>
        <div className={s.homeAbout_cat}>
          <div className={s.homeAbout_cat__title}>Современная мебель</div>
          <div className={s.homeAbout_cat__text}>
            Наш интернет-магазин предлагает широкий выбор дизайнерской мебели для вашего дома. Мы
            представляем коллекции стульев и кресел, журнальных столов и столов, комодов и консолей
            из ценных пород дерева, стеллажей и диванов, а также кроватей с балдахинами в
            классическом стиле и шкафов с уникальными дизайнерскими рисунками для ценителей
            современного искусства. Вся наша мебель является не только функциональной, но и
            эстетически привлекательной, создавая уютную и стильную обстановку в вашем доме.
          </div>
        </div>
        <div className={s.homeAbout_cat}>
          <div className={s.homeAbout_cat__title}>Магия картин</div>
          <div className={s.homeAbout_cat__text}>
            Наша коллекция картин - это искусство, которое обогатит ваш интерьер и добавит
            изысканности вашему пространству. Наши картины созданы талантливыми художниками, такими
            как Basler Claire, Voinar Evgenia, HOUDINI Art Group и многие другие, которые используют
            только качественные материалы для создания своих произведений искусства. Каждая картина
            уникальна и имеет свою собственную энергетику, которая передается вам и вашим гостям.
          </div>
        </div>
        <div className={s.homeAbout_cat}>
          <div className={s.homeAbout_cat__title}>Дизайнерские зеркала</div>
          <div className={s.homeAbout_cat__text}>
            В нашем каталоге вы найдете зеркала различных форм и размеров, изготовленные из
            высококачественных материалов, чтобы подчеркнуть индивидуальность вашего интерьера. Мы
            предлагаем зеркала, которые могут стать центральным элементом в вашем доме. Заказывайте
            зеркала в нашем интернет-магазине прямо сейчас, и будьте уверены, что наши зеркала будут
            служить вам долгие годы и принесет удовольствие каждый раз, когда вы на нее взглянете.
          </div>
        </div>
      </div>
    </section>
  );
};