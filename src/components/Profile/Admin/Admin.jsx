import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { useEffect, useState } from "react";
import { TabPanel } from "../../shared/TabPanel/TabPanel";
import { AddCategories } from "./AddCategories";
import { DeleteProduct } from "./DeleteProduct";
import s from "./Admin.module.css";
import { useSelector } from "react-redux";

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const Admin = ({ favorite, basket }) => {
  const classes = useStyles();
  const error = useSelector((state) => state.admin.error);
  const isDone = useSelector((state) => state.admin.done);
  const [value, setValue] = useState(0);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
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
        <TabPanel value={value} index={0}>
          <AddCategories />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DeleteProduct error={error} isDone={isDone} />
        </TabPanel>
      </div>
    </div>
  );
};
