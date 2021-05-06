import s from "./Purchases.module.css";
export const Purchases = () => {
  return (
    <>
      <div className="title">История покупок</div>
      <div className={s.wrap}>
        <div className={s.history}>
          <div className={s.historyHead}>
            <div className={s.historyHeadInner}>
              <div>
                <div className={s.historyHeadTitle}>Заказ от 5 мая:</div>
                <div className={s.historyHeadId}>40667816-0032</div>
              </div>
              <div className={s.historyHeadCost}>
                1150р <span className={s.historyHeadStatus}>,оплачено</span>
              </div>
            </div>
          </div>
          <div className={s.historyBottom}>
            <div className={s.historyBottomInner}>
              <div className={s.historyBottomText}>
                <div className={s.historyBottomTitle}>
                  Отправлена заявка на покупку
                </div>
                <div className={s.historyBottomDate}>
                  Дата отмены: 6 мая в 03:13
                </div>
              </div>
              <div className={s.historyBottomImg}>
                <img
                  src="https://sun9-57.userapi.com/impg/8Jvhgj25WpcvnJQYY3go1M8qoA8H54lGB3e3ZQ/obEK0XlX-NA.jpg?size=1334x1334&quality=96&sign=667f4ecb98f4a84360fe8040773daef2&type=album"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
