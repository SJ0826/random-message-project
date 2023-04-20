import ChattingBox from 'components/ChattingBox'
import React, { useState } from 'react'

interface MessageItemProps {
	name: string
	message: string
	receivedMessage: string
}
const MessageItem = ({ name, message, receivedMessage }: MessageItemProps) => {
	const [isOpenMessageBox, setIsOpenMessageBox] = useState(false)
	return (
		<>
			<div className="messageItem" onClick={() => setIsOpenMessageBox(true)}>
				💌
				<span className="messageItem__name">{name}</span>
				님으로부터 메세지가 도착했습니다{' '}
			</div>
			{isOpenMessageBox && (
				<ChattingBox
					setIsOpen={setIsOpenMessageBox}
					name={name}
					message={message}
					receivedMessage={receivedMessage}
				/>
			)}
		</>
	)
}

export default MessageItem
