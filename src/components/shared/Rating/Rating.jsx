import s from "./Rating.module.css";

export const Rating = ({ rating }) => {
  return (
    <div className={s.infoCommunication}>
      <div className={s.review} data-rating={rating}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        {rating}
      </div>
    </div>
  );
};
