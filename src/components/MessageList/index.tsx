import React from 'react'

const dummy = [
	{ name: '성진', message: 'hi' },
	{ name: '영현', message: 'hi' },
	{ name: '원필', message: 'hi' },
	{ name: '도운', message: 'hi' },
]

const MessageList = () => {
	return (
		<section className="messageList__container">
			<div className="messageList__header">
				<div className="received__message">
					<span>받은 메세지</span>
					<div className="received__message__number">{dummy.length}</div>
				</div>
				<div className="send__message__button">메세지 보내기</div>
			</div>

			<div className="messageList_list">messageList Content</div>
		</section>
	)
}

export default MessageList
