import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import { MessageContext } from '../../../MessageContext/index'
import TimelineItem from '../TimelinesItem/index.js'
import classNames from 'classnames'

const Timeline = ({ className, type}) => {
	const messageContext = useContext(MessageContext)
	const { messages } = messageContext

	return (
		messages.length > 0 &&
			<Grid container className = {classNames('timelineContainer', type === 'sent' ? 'sent' : 'upcoming')}>
				{messages.map((data, id) => (
					<TimelineItem key ={id} data={data} type={type}/>
				))}
			</Grid>

	)

}

export default Timeline;
