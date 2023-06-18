import React from 'react'
import {Divider,ListItem,IconButton,ListItemText,ListItemSecondaryAction} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

const Lists = (props) => {

    return (
        <>
        <ListItem>
        <ListItemText primary={props.text} />
        </ListItem>
        <ListItem className="btn-list-item">
        <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" className="edit-bg">
                                <EditIcon className="edit-icon" onClick={() => {props.onEdit(props.id); }}/>
                                </IconButton>
                                <IconButton className="del-bg">
                                <CancelIcon className="del-icon" onClick={() => {props.onSelect(props.id); }}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>
                            <Divider/>
        </>
    );
}

export default Lists;
