import s from "./Footer.module.css";
import { Email } from "./Email/Email";
import { Information } from "./Information/Information";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrap}>
          <Email />
          <Information />
        </div>
      </div>
    </footer>
  );
};
