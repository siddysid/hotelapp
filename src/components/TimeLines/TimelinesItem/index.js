import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
    box: {
        padding:'15px',
        backgroundColor : 'lightgrey',
        borderTop: '1px solid darkgrey'
    },
    status: {
      borderRight: '1px solid darkgrey',
  }
  }));

const TimelineItem = ({ className, data, type }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className = "timelineItem">
            <Grid container item direction="row" className="messageContent">
                <Grid container item xs={11} direction = "column">
                    <Grid item className="timelineItemContent">
                        <h1>Hi {data.name}</h1>
                        <p> {data.message}</p>
                        <p> {data.review} Star Review</p>
                        <p>{data.review_message}</p>
                    </Grid>
                    <Grid container item className = {classes.box} direction="row" >
                         {type === 'sent' &&
                          <Grid container direction="column" item sm={2} xs={12} className= {classes.status}>
                            <Grid item >
                              Status
                            </Grid>
                            <Grid item>
                              sent
                            </Grid>
                          </Grid>
                          }
                          <Grid container item direction="column" sm={type==='sent' ? 7 : 9} xs={12}>
                            <Grid item>
                              Listing
                            </Grid>
                            <Grid item>
                              {data.listing}
                            </Grid>
                            </Grid>

                        <Grid item sm={3} xs={12}>
                            <Button
                                variant = {type === "sent" ? "outlined" : "contained"}
                                className = {type === 'upcoming'? classes.buttonContained : classes.buttonOutlined}
                                onClick={handleClick}
                                disabled= {type === 'sent' ? true : false}
                            >
                                Manage
                            </Button>
                            <ManagePopUp open={open} anchorEl = {anchorEl} setAnchorEl={setAnchorEl} />
                        </Grid>
                    </Grid>
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
