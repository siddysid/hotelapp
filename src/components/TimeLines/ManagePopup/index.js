import React from 'react'
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import BlockIcon from '@material-ui/icons/Block';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function ManagePopUp({ open, anchorEl, setAnchorEl}) {
    const handleClose = () => {
        setAnchorEl(null);
      };

    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
             <List component="nav" aria-label="main mailbox folders">
							 <ListItem button>
         				 <ListItemIcon>
           				 <EditIcon />
          			 </ListItemIcon>
         				 <ListItemText primary="Edit Message" />
       				 </ListItem>
							 <ListItem button>
         				 <ListItemIcon>
           				 <EditIcon />
          			 </ListItemIcon>
         				 <ListItemText primary="Edit Review" />
       				 </ListItem>
							 <ListItem button>
         				 <ListItemIcon>
           				 <BlockIcon />
          			 </ListItemIcon>
         				 <ListItemText primary="Disable" />
       				 </ListItem>
							 <ListItem button>
         				 <ListItemIcon>
           				 <TelegramIcon />
          			 </ListItemIcon>
         				 <ListItemText primary="Send Now" />
       				 </ListItem>
						</List>
          </Popover>
        </div>
      );
}
