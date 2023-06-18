import React, {useState} from 'react';
import { Grid, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, NativeSelect, FormGroup, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root: {
        '& .MuiFormControl-root': {
            width: "80%",
            margin: "auto",
            marginBottom: theme.spacing(1),
        },
        // '& .MuiOutlinedInput-input': {
        //     padding: "5px 0 5px 0",
        // },
    }
}))

    const initialFValues = {
        id: 0,
        fullname: '',
        email: '',
        mobile: '',
        city: '',
        gender: 'male',
        department: '',
        hireDate: new Date(),
        isPermanent: false,
    }


const EmployeeForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialFValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }


    return (
        <>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                             name="gender"
                             value={values.gender}
                             onChange={handleInputChange}
                            >
                                <FormControlLabel value="Male" control={<Radio color="primary"/>} label="Male"/>
                                <FormControlLabel value="Female" control={<Radio color="primary"/>} label="female" />
                                <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Age</InputLabel>
                            <NativeSelect
                            variant="outlined"
                            name="age"
                            value={values.age}
                            onChange={handleInputChange}
                            >
                            <option aria-label="None" value="" />
                            <option value="Development">Development</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Accounting">Accounting</option>
                            <option value="HR">HR</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl component="fieldset">
                            <FormGroup>
                            <FormControlLabel
                                control={<Checkbox  onChange={handleInputChange} name="isPermanent" color="primary"/>}
                                label="Permanent Employee"
                            />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>

        </>
    )
}

export default EmployeeForm;