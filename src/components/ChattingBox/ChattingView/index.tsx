import SpeechBubble from 'components/SpeechBubble'
import React from 'react'

interface ChattingViewProps {
	message: string
	receivedMessage: string
}
const ChattingView = ({ message, receivedMessage }: ChattingViewProps) => {
	return (
		<main className="preview__bubbles">
			<SpeechBubble text={message} bubbleState={'send'} />
			<SpeechBubble text={receivedMessage} bubbleState={'receive'} />
		</main>
	)
}

export default ChattingView
