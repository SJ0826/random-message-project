import MessageItem from 'components/MessageItem'
import { MessageInterface } from 'lib/types/messageInterface'
import React from 'react'

const dummy = [
	{ id: 1, name: '성진', message: 'hi' },
	{ id: 2, name: '영현', message: 'hi' },
	{ id: 3, name: '원필', message: 'hi' },
	{ id: 4, name: '도운', message: 'hi' },
] as MessageInterface[]

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

			<div className="messageList_list">
				{dummy.map((message) => (
					<MessageItem key={message.id} name={message.name} />
				))}
			</div>
		</section>
	)
}

export default MessageList
