import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Category = () => {
    return (
      <>
<div className="row">
<div className="col-lg-3">
<ListItem>
                  <ListItemIcon>
                    {/* <FolderIcon /> */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                   
                  />
                </ListItem>
        </div>
        </div>
      </>
    );
}

export default Category;