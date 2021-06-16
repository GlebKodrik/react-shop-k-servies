// import s from "./TabList.module.css";
import { makeStyles, useTheme } from "@material-ui/core";
import { memo, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import img from "./../../../../../../assets/img/fetback.png";
// import { Feedback } from "./Feedback/Feedback";
// import { ButtonCheckAuth } from "../../../../../shared/Button/ButtonCheckAuth";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import { Specs } from "./Specs";

const a11yProps = (index) => ({
  id: `full-width-tab-${index}`,
  "aria-controls": `full-width-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 16%)",
    borderRadius: 8,
  },
}));

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const TabsList = memo(({ product }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root} id={"tabList"}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Описание" {...a11yProps(0)} />
            {/*<Tab label="Характеристики" {...a11yProps(1)} />*/}
            {/*<Tab label="Отзывы" {...a11yProps(2)} />*/}
            {/*<Tab label="Обзоры" {...a11yProps(3)} />*/}
          </Tabs>
        </AppBar>
        <div>
          <TabPanel value={value} index={0} dir={theme.direction}>
            {product.description}
          </TabPanel>
          {/*<TabPanel value={value} index={1} dir={theme.direction}>*/}
          {/*  <Specs />*/}
          {/*</TabPanel>*/}
          {/*<TabPanel value={value} index={2} dir={theme.direction}>*/}
          {/*  {!!product?.comments.length && (*/}
          {/*    <div className={s.send}>*/}
          {/*      <ButtonCheckAuth />*/}
          {/*    </div>*/}
          {/*  )}*/}

          {/*  {!!product?.comments.length ? (*/}
          {/*    <Feedback feedback={product?.comments} />*/}
          {/*  ) : (*/}
          {/*    <div className={s.comment}>*/}
          {/*      <img className={s.img} src={img} alt="Отзыв" />*/}
          {/*      <div className={s.commentText}>*/}
          {/*        <div className="title">Отзывов ещё нет, будьте первыми!</div>*/}
          {/*        <div className={s.subTitle}>*/}
          {/*          Расскажите о преимуществах и недостатках товара. Ваш отзыв*/}
          {/*          поможет другим покупателям сделать выбор.*/}
          {/*        </div>*/}
          {/*        <ButtonCheckAuth />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</TabPanel>*/}
          {/*<TabPanel value={value} index={3} dir={theme.direction}>*/}
          {/*  <div className="title">*/}
          {/*    Обзоров ещё нет, будьте первыми!&#128517;*/}
          {/*  </div>*/}
          {/*  <div className={s.text}>*/}
          {/*    Расскажите о преимуществах и недостатках товара. Ваш обзор поможет*/}
          {/*    другим покупателям сделать выбор.*/}
          {/*  </div>*/}
          {/*</TabPanel>*/}
        </div>
      </div>
    </>
  );
});
