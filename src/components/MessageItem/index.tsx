import React from 'react'

interface MessageItemProps {
	name: string
}
const MessageItem = ({ name }: MessageItemProps) => {
	return (
		<div className="messageItem">
			💌
			<span className="messageItem__name">{name}</span>
			님으로부터 메세지가 도착했습니다{' '}
		</div>
	)
}

export default MessageItem
