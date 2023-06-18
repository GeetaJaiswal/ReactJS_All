import {AppBar, Toolbar, Grid, IconButton, Badge, InputBase, makeStyles} from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: "#fff",
        // transform: "translateZ(0)",
    },
    searchInput: {
        padding: `0 ${theme.spacing(1)}px`,
        fontSize: "0.8rem",
        opacity: "0.6",
        marginLeft: "320px",
        '& .MuiSvgIcon-root': {
            marginRight: [theme.spacing(1)]
        },
        '&:hover':{
            backgroundColor: "#f2f2f2",
        }
    }
}))


const Header = () => {

    const classes = useStyles();

    return (
        <>
        <AppBar position="static" className={classes.root} >
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase 
                            placeholder="Search here"
                            startAdornment={<SearchIcon fontSize="small" />}
                            className={classes.searchInput}
                        />
                    </Grid>

                    <Grid item sm></Grid>

                    <Grid item>
                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                        >
                        <Badge badgeContent={17} color="error">
                            <NotificationsActiveIcon />
                        </Badge>
                        </IconButton>

                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="primary"
                        >
                        <Badge badgeContent={17} color="error">
                            <ChatBubbleOutlineIcon />
                        </Badge>
                        </IconButton>

                        <IconButton
                        size="large"
                        color="inherit"
                        >
                        <PowerSettingsNewIcon color="primary" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Header;