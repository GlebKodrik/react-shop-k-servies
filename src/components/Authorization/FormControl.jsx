import React, {useState} from "react";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

export const useFormControl = (register, errors , name) => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return <FormControl variant="outlined" error={errors.password ? true : false}>
        <InputLabel required htmlFor="outlined-adornment-password">Пароль</InputLabel>
        <OutlinedInput
            name={name}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            inputRef={register}
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            }
            labelWidth={70}
        />
        {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
    </FormControl>
}