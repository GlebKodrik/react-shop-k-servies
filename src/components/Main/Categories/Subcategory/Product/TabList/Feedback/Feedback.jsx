import s from "./Feedback.module.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { Rating } from "../../../../../../shared/Rating/Rating";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const Feedback = ({ feedback }) => {
  const classes = useStyles();
  return (
    <div className={s.scroll}>
      {feedback?.map((el) => {
        return (
          <div className={s.item} key={el._id}>
            <div className={s.wrapTop}>
              <Avatar alt={el?.user} src={el?.img} className={classes.large} />
              <div className={s.innerTop}>
                <div className={s.user}>{el?.user}</div>
                <div className={s.innerDateRating}>
                  <div className={s.date}>{el?.date}</div>
                  <Rating rating={el?.rating} />
                </div>
              </div>
            </div>
            <div className={s.wrapBottom}>
              <div className={s.block}>
                <div className={s.title}>Достоинства</div>
                <p className={s.message}>{el?.plus}</p>
              </div>
              <div className={s.block}>
                <div className={s.title}>Недостатки</div>
                <p className={s.message}>{el?.minuses}</p>
              </div>
              <div className={s.block}>
                <div className={s.title}>Комментарий</div>
                <p className={s.message}>{el?.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
