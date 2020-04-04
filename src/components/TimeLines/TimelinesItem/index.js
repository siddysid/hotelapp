import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ManagePopUp from '../ManagePopup/index'
import "../message.css"

const useStyles = makeStyles((theme) => ({
    buttonContained: {
      backgroundColor: 'darkorange',
      color: 'white'
    },
    buttonOutlined: {
        border: '1px solid darkorange',
        color: 'darkorange'
      },
  }));

const TimelineItem = ({ className, data, type }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className = "timelineItem">
            <Grid container direction="row" className="messageContent">
                <Grid item xs={11}>
                    <div className="timelineItemContent">
                        <h1>Hi {data.name}</h1>
                        <p> {data.message}</p>
                        <p> {data.review} Star Review</p>
                        <p>{data.review_message}</p>
                    </div>
                    <Box display="flex" bgcolor="lightgrey" border={1} borderColor="darkgrey" className ="box">
                         {type == 'sent' &&
                            <Box flexGrow = {1}>
                            <Box>Status</Box>
                            <Box>Sent</Box>
                            </Box>
                         }
                        <Box flexGrow = {1}>
                            <Box>Listing</Box>
                            <Box>{data.listing}</Box>
                        </Box>
                        <Box>
                            <Button
                                variant = {type== "sent" ? "outlined" : "contained"}
                                className = {type=='upcoming'? classes.buttonContained : classes.buttonOutlined}
                                onClick={handleClick}
                                disabled= {type == 'sent' ? true : false}
                            >
                                Manage
                            </Button>
                            <ManagePopUp open={open} anchorEl = {anchorEl} setAnchorEl={setAnchorEl} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                   <span className="circle" ><AccountCircleIcon style = {{fill: "grey"}} fontSize="large" /></span>
                </Grid>
            </Grid>
        </div>
    )
}

export default TimelineItem;

TimelineItem.propTypes = {
    className: PropTypes.string,
};

TimelineItem.defaultProps = {
    className: "",
}
