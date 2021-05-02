import s from "./Requisites.module.css";
import cn from "classnames";
export const Requisites = () => {
  return (
    <div>
      <div className={cn("title", s.title)}>
        <span c>К</span>-сервис
      </div>
      <div className={s.requisites}>
        <p>Реквизиты компании</p>
        <ul>
          <li>
            <span>Счет №:</span> 40702810901390000018
          </li>
          <li>
            <span>Наименование:</span> ООО "К-Сервис"
          </li>
          <li>
            <span>ИНН:</span>7807208112
          </li>
          <li>
            <span>КПП:</span> 780701001
          </li>
        </ul>
        <p>Реквизиты банка</p>
        <ul>
          <li>Название: Ф-Л СЕВЕРО-ЗАПАДНЫЙ ПАО БАНК "ФК ОТКРЫТИЕ"</li>
          <li>ИНН: 7706092528</li>
          <li>КПП: 784143002</li>
          <li>БИК: 044030795</li>
          <li>Город: Санкт-Петербург</li>
          <li>Корр. счет: 30101810540300000795 в ГУ БАНКА РОССИИ ПО ЦФО</li>
        </ul>
        <p>
          Генеральный директор Кодрик Марина Олеговна Действует на основании
          устава.
        </p>
      </div>
    </div>
  );
};
