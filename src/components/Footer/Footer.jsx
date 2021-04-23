import s from "./Footer.module.css";
import { ContentEmail } from "./Content/Email/ContentEmail";
import { Information } from "./Information/Information";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrap}>
          <ContentEmail />
          <Information />
        </div>
      </div>
    </footer>
  );
};
