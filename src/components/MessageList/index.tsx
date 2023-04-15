import MessageItem from 'components/MessageItem'
import { messageListAtom } from 'lib/recoil/atom'

import React from 'react'
import { useRecoilValue } from 'recoil'

const MessageList = () => {
	const messageList = useRecoilValue(messageListAtom)
	return (
		<section className="messageList__container">
			<div className="messageList__header">
				<div className="received__message">
					<span>받은 메세지</span>
					<div className="received__message__number">{messageList.length}</div>
				</div>
				<div className="send__message__button">메세지 보내기</div>
			</div>

			<div className="messageList_list">
				{messageList.map((message) => (
					<MessageItem key={message.id} name={message.name} />
				))}
			</div>
		</section>
	)
}

export default MessageList
