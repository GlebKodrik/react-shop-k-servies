import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import s from "./NotFound.module.css"
export const NotFound = () => {
    return <div className={s.notFound__wrap}>
        <div className="container">
            <div className={s.notFoud__block}>
                <div className={s.notFound__img}>
                    <img src="https://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png" alt=""/>
                </div>
                <div className={s.notFoud__text}>
                    <div className={s.notFound__title}>По Вашему запросу ничего не найдено</div>
                    <NavLink to={"/"}>
                        <Button variant="contained" color="secondary">
                            На главную
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
}