
import {makeStyles} from '@material-ui/core';



const useStyles = makeStyles({
    sideMenu : {
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
        display: "flex",
        flexDirection: 'column',
        position: 'absolute',
        // left: "0px",
    }
})

const SideMenu = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.sideMenu}></div>
        </>
    );
}

export default SideMenu;