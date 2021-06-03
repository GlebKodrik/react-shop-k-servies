import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    maxWidth: 300,
  },
}));

export const SelectInput = ({ array, name, ...props }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    props.setId(e.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>{name}</InputLabel>
        <Select value={props.id} onChange={handleChange}>
          {array?.map((el) => {
            return (
              <MenuItem key={el._id} value={el._id}>
                {el.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};
