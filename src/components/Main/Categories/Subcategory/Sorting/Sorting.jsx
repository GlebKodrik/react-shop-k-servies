import s from "./Sorting.module.css";
import { useState } from "react";
export const Sorting = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    object: [
      { id: 1, text: "по популярности" },
      { id: 2, text: "по цене" },
      { id: 3, text: "по рейтингу" },
      { id: 4, text: "по отзывам" },
    ],
  });
  const handleClick = (index) => {
    setState({ activeIndex: index, object: [...state.object] });
  };

  return (
    <>
      <div className={s.sorting}>
        {state.object.map((person, index) => {
          return (
            <div
              key={index}
              className={
                state.activeIndex === index
                  ? `${s.item} ${s.itemActive}`
                  : s.item
              }
              onClick={() => handleClick(index)}
            >
              {person.text}
            </div>
          );
        })}
      </div>
    </>
  );
};
