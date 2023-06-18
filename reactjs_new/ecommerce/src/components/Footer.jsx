import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import paymentMethod from '../assets/images/paymentMethod.svg';

const Footer = () => {

    const year = new Date().getFullYear();
        return(
            <>
                <div className="row footer-list">
                    <div className="col-lg-4">
                        <div className="footer-about">
                            <Typography className="footer-title">
                                about
                            </Typography>
                                <List className="footer-single-list">
                                    <ListItem style={{display:"block"}}>
                                    <ListItemText className="footer-list-text"
                                        primary="Contact us"
                                    />
                                    <ListItemText className="footer-list-text"
                                        primary="About us"
                                    />
                                    </ListItem>
                                </List>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-social">
                        <Typography className="footer-title">
                                social
                            </Typography>
                                <List>
                                    <ListItem style={{display:"block"}}>
                                    <ListItemText className="footer-list-text"
                                        primary={<><InstagramIcon className="insta-icon"/><span> instagram</span></>}
                                    />
                                    <ListItemText className="footer-list-text"
                                        primary={<><FacebookIcon/><span> facebook</span></>}
                                    />
                                    <ListItemText className="footer-list-text"
                                        primary={<><YouTubeIcon/><span> youtube</span></>}
                                    />
                                    </ListItem>
                                </List>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-address">
                        <Typography className="footer-title">
                                get in touch
                            </Typography>
                                <List>
                                    <ListItem style={{display:"block"}}>
                                    <ListItemText className="footer-list-text"
                                        primary="Address: Single-linLorem Ipsum is simply dummy"
                                    />
                                    <ListItemText className="footer-list-text"
                                        primary="Mobile: +91 9876543254"
                                    />
                                    <ListItemText className="footer-list-text"
                                        primary="Email: demo@gmail.com"
                                    />
                                    </ListItem>
                                </List>
                        </div>
                    </div>
                </div>

                <footer className="footer-bottom">
                    <p>copyright © {year} website-name - All Rights Reserved</p>
                    <img src={paymentMethod} alt="payment method" className="d-none d-lg-block"/>
                </footer>
            </>
        );
}

export default Footer;
