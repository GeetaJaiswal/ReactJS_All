import { Paper, Card, makeStyles, Typography, Box } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: "#fdfdff",
        paddingLeft: "320px",
    },
    PageHeader: {
        padding: [theme.spacing(2)],
        display:"flex",
        marginBottom: [theme.spacing(1)],
        '& .MuiTypography-root': {
            fontSize: "14px",
        }
    },
    headerIcon: {
        padding: "10px 7px",
        marginRight: 12,
        color: "#253053",
    },
    headerSubtitile: {
        opacity: "0.6",
    }
}))


const PageHeader = (props) => {

    const {icon, title, subtitle} = props;
    const classes = useStyle();

 return(
     <>
     <Paper elevation={0} square className={classes.root}>
         <Box className={classes.PageHeader} alignItems="center">
            <Card className={classes.headerIcon}>{icon}</Card>
             <div>
                 <Typography
                 varient="h6"
                 component="div">
                     {title}
                 </Typography>

                 <Typography
                 varient="subtitle2"
                 component="div"
                 className={classes.headerSubtitile}>
                     {subtitle}
                 </Typography>
             </div>
         </Box>     
     </Paper>

     </>
 )   
}

export default PageHeader;