import cn from "classnames";
import s from "./About.module.css";

export const About = () => {
  return (
    <>
      <section className={s.company}>
        <div className={s.companyItem}>
          <div className={s.companyText}>
            <h2>
              Добро пожаловать на <span>К</span>-сервис
            </h2>
            <p>
              На протяжении многих лет Наша компания успешно работает и
              развивается в данной сфере!
            </p>
          </div>
        </div>
      </section>

      <section className={s.advantages}>
        <div className={cn("title", s.advantagesTitle)}>Наши преимущества</div>
        <div className={s.advantagesWrap}>
          <div className={s.advantagesItem}>
            <div className={cn("title", s.advantagesTop, s.advantagesImgMoney)}>
              <h3 className={s.advantagesTopText}>Выгодные цены</h3>
            </div>
            <div>
              <div className={s.advantagesBottomTitle}>Наши цены</div>
              <p className={s.advantagesBottomSub}>подойдут всем</p>
            </div>
          </div>
          <div className={s.advantagesItem}>
            <div className={cn("title", s.advantagesTop, s.advantagesImgBox)}>
              <h3 className={s.advantagesTopText}>
                Удобная <br /> доставка
              </h3>
            </div>
            <div>
              <div className={s.advantagesBottomTitle}>Все клиенты</div>
              <p className={s.advantagesBottomSub}>
                довольны <br />
                нашей доставкой
              </p>
            </div>
          </div>
          <div className={s.advantagesItem}>
            <div
              className={cn("title", s.advantagesTop, s.advantagesImgServices)}
            >
              <h3 className={s.advantagesTopText}>
                Разнообразие <br /> услуг
              </h3>
            </div>
            <div>
              <div className={s.advantagesBottomTitle}>Мы</div>
              <p className={s.advantagesBottomSub}>
                предлагаем большое <br /> количество услуг
              </p>
            </div>
          </div>
          <div className={s.advantagesItem}>
            <div className={cn("title", s.advantagesTop, s.advantagesImgStaff)}>
              <h3 className={s.advantagesTopText}>Персонал</h3>
            </div>
            <div>
              <div className={s.advantagesBottomTitle}>Каждый</div>
              <p className={s.advantagesBottomSub}>
                сотрудник <br /> профессионал своего дела
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={cn("title", s.advantagesTitle)}>О компании</div>
        <div className={s.info}>
          <p className={s.infoArticle}>
            Приоритетным направлением деятельности компании «К-Сервис»
            является&nbsp;<u>ОБЕСПЕЧЕНИЕ БЕСПЕРЕБОЙНОЙ ПОСТАВКИ</u> запасных
            частей и расходных материалов на предприятия горнодобывающей,
            дорожной и строительной отраслей.
          </p>
          <p className={s.infoArticle}>
            Поставка широкой товарной номенклатуры, объединенной конвейерным
            транспортом, позволяет нам <b>взять на себя ответственность</b> быть
            не только надежными поставщиками, но и{" "}
            <b>осуществлять техническую поддержку</b> наших клиентов.
          </p>
          <p className={s.infoArticle}>
            Через обучение и творческий подход мы раскрываем потенциал компании
            и каждого ее сотрудника.
          </p>
          <p className={s.infoArticle}>
            <span className={s.infoTextWidth}>
              НАША ЦЕЛЬ - БЕСПЕРЕБОЙНАЯ РАБОТА ВАШЕГО ПРЕДПРИЯТИЯ
            </span>
          </p>
          <p>
            <u>В настоящее время наша компания поставляет:</u>
          </p>
          <ul className={s.infoList}>
            <li>
              полный спектр конвейерных лент отечественного и зарубежного
              производства;
            </li>
            <li>формовые резинотехнические изделия;</li>
            <li>конвейерные ролики;</li>
            <li>роликоопоры;</li>
            <li>сита для грохотов.</li>
            <li>ленты в кольце; </li>
            <li>ленты для металоулавливателей;</li>
            <li>конвейерные ленты вертикальных транспортеров;</li>
            <li>материалы для ремонта и стыковки конвейерных лент.</li>
          </ul>
          <p className={s.infoArticle}>
            <b>Также, ООО «К-Сервис» оказывает услуги по металлообработке.</b>
          </p>
          <p className={s.infoArticle}>
            Компания осуществляет как единичные, так и серийные заказы по
            обработке деталей и сборочных единиц различной сложности и высокой
            степени чистоты поверхности.
          </p>
          <p className={s.infoArticle}>
            Токарные работы осуществляются по имеющемуся чертежу заказчика или
            образцу изделия. Все работы производятся как на универсальных
            станках, так и на станках с ЧПУ.
          </p>
        </div>
      </section>
    </>
  );
};
