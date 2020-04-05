import React, {useState, useEffect} from 'react'

const MessageContext = React.createContext()

// Message Provider for messages
const MessageProvider = (props) => {
    let url = 'https://5e88a4bb19f5190016fed675.mockapi.io/api/upcomingmessages'
    const [messages, setMessage] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchMessage = async () => {
        try {
            const MessageData = await fetch(url)
            return MessageData.json()
        }
        catch(e) {
            console.log(e.message)
        }
    }

    //Call the fetch function inside useEffect
    useEffect(() => {
        fetchMessage()
					.then(data => {
						setMessage(data)
						setLoading(false)
					})
		})

		return (
			<MessageContext.Provider value ={{
				loading,
				messages,
			}}>
				{props.children}
			</MessageContext.Provider>
		)

}

export { MessageProvider, MessageContext}
