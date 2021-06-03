import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { useEffect } from "react";
import { AddCategories } from "./AddCategories";
import { DeleteProduct } from "./DeleteProduct";
import s from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../redux/adminReducer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DeleteCategories } from "./DeleteCategories";
import { AddProduct } from "./AddProduct";

const TabPanel = (props) => {
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
        <Box>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

export const Admin = ({ favorite, basket }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const page = useSelector((state) => state.admin.actualPage);
  const error = useSelector((state) => state.admin.error);
  const isDone = useSelector((state) => state.admin.done);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [basket, favorite]);

  const handleChange = (event, newValue) => {
    dispatch(setPage(newValue));
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={page}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Добавление категории" {...a11yProps(0)} />
        <Tab label="Добавление продукта" {...a11yProps(1)} />
        <Tab label="Удаление категории" {...a11yProps(2)} />
        <Tab label="Удаление продукта" {...a11yProps(3)} />
      </Tabs>
      <div className={s.panel}>
        <TabPanel value={page} index={0}>
          <AddCategories />
        </TabPanel>
        <TabPanel value={page} index={1}>
          <AddProduct categories={categories} />
        </TabPanel>
        <TabPanel value={page} index={2}>
          <DeleteCategories categories={categories} favorite={favorite} />
        </TabPanel>
        <TabPanel value={page} index={3}>
          <DeleteProduct error={error} isDone={isDone} />
        </TabPanel>
      </div>
    </div>
  );
};
