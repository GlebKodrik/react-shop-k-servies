import { useSelector } from "react-redux";
import s from "./TabList.module.css";

export const Specs = () => {
  const characteristics = useSelector((state) => state.products.specs);

  return (
    <>
      {!characteristics.length ? (
        <div className={"title"}>Характеристики к сожалению нет&#128552;</div>
      ) : (
        <ul className={s.characteristics}>
          {characteristics.map((el, index) => {
            return <li key={index}>{el.value}</li>;
          })}
        </ul>
      )}
    </>
  );
};
