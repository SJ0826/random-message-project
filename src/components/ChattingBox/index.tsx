import useModal from 'lib/hooks/useModal'
import React from 'react'
import ChattingBoxHeader from './ChattingBoxHeader'
import ChattingBoxForm from './ChattingBoxForm'
import ChattingView from './ChattingView'
import { useRecoilValue } from 'recoil'
import { messageSelector } from 'lib/recoil/recoilMessageState'
import { MessageInterface } from 'lib/types/messageInterface'

const ChattingBox = () => {
	const messageList = useRecoilValue<MessageInterface[]>(messageSelector)
	return (
		<div className="chattingBox__background">
			<div className="chattingBox" ref={useModal()}>
				<ChattingBoxHeader />
				<ChattingView
					message={messageList[messageList.length - 1]?.message}
					receivedMessage={messageList[messageList.length - 1]?.receivedMessage}
				/>
				<ChattingBoxForm />
			</div>
		</div>
	)
}

export default ChattingBox
