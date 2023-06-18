import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EmployeeForm from './EmployeeForm';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: [theme.spacing(4)],
        padding: theme.spacing(3),
        marginLeft: "340px",
    }
}))



const Employees = () => {
    const classes = useStyles();
    return(
        <>
        <PageHeader 
            title="Employee title"
            icon={<PeopleOutlineIcon />}
            subtitle="Employee description"
        />
        <Paper className={classes.root}>
            <EmployeeForm/>
        </Paper>
        </>
    )
}

export default Employees;