import SpeechBubble from 'components/SpeechBubble'
import React, { useEffect, useState } from 'react'

interface ChattingViewProps {
	message: string
	receivedMessage: string
}
const ChattingView = ({ message, receivedMessage }: ChattingViewProps) => {
	const [showReceivedMessage, setShowReceivedMessage] = useState(false)
	useEffect(() => {
		setShowReceivedMessage(false)
		const handleShowReceivedMessage = () => {
			setTimeout(() => {
				setShowReceivedMessage(true)
			}, 3000) // 3초 뒤에 receivedMessage를 보여주도록 설정
		}

		handleShowReceivedMessage()
	}, [receivedMessage])

	useEffect(() => setShowReceivedMessage(true), [])

	return (
		<main className="preview__bubbles">
			<SpeechBubble text={message} bubbleState={'send'} />
			{showReceivedMessage && (
				<SpeechBubble text={receivedMessage} bubbleState={'receive'} />
			)}
		</main>
	)
}

export default React.memo(ChattingView)
