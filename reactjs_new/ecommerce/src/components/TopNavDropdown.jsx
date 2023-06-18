import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const LoginDropdown = (props) => {
    return (
        <>
              <ListItem>
                  <ListItemAvatar className="top-nav-list-avatar">
                    <Avatar className="top-nav-list">
                     {props.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  className="top-nav-list"
                    primary={props.title} 
                  />
              </ListItem>
                <Divider className="login-divider"/>                
       </>
    );
}

const MoreDropdown = (props) => {
  return (
      <>
            <ListItem>
                <ListItemAvatar className="top-nav-list-avatar">
                  <Avatar className="top-nav-list">
                   {props.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText  className="top-nav-list"
                  primary={props.title} 
                />
            </ListItem>
              <Divider className="login-divider"/>                
     </>
  );
}


const SideNav = (props) => {
  return (
      <>
            <ListItem>
                <ListItemAvatar className="top-nav-list-avatar">
                  <Avatar className="top-nav-list">
                   {props.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText  className="top-nav-list"
                  primary={props.title} 
                />
            </ListItem>
              <Divider className="login-divider"/>                
     </>
  );
}

export {LoginDropdown,MoreDropdown, SideNav}
