import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SentMessage from "../Messages/SentMessage/index"
import UpcomingMessage from "../Messages/UpcomingMessage/index"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  export default function Dashboard() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
			<div className={classes.root}>
      	<AppBar position="static">
					<Tabs
						value = {value}
						onChange= {handleChange}
					>
						<Tab label = "Upcoming Messages" />
						<Tab label = "Sent Messages" />
					</Tabs>
     		</AppBar>
				<TabPanel value={value} index={0}>
					<UpcomingMessage />
    	  </TabPanel>
     	  <TabPanel value={value} index={1}>
       	 <SentMessage />
      	</TabPanel>
			</div>
		);
	}
