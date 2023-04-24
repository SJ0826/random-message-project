import ChattingBox from 'components/ChattingBox'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import MessageList from 'components/MessageList'
import SpeechBubble from 'components/SpeechBubble'
import { PROFECT_DESCRIPTION } from 'lib/constants/constants'
import { messageSelector } from 'lib/recoil/recoilMessageState'
import { chatBoxModalStateAtom } from 'lib/recoil/recoilModalOpenState'
import { MessageInterface } from 'lib/types/messageInterface'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import 'style/main.css'

const GetStart = () => {
	const description = PROFECT_DESCRIPTION
	const messageList = useRecoilValue<MessageInterface[]>(messageSelector)
	const [isChatboxOpen, setIsChatboxOpen] = useRecoilState(
		chatBoxModalStateAtom,
	)
	return (
		<div className="start__container">
			<Layout>
				<Logo />
				<SpeechBubble text={description} bubbleState={'default'} />
				<MessageList />
				<Footer />
			</Layout>
			{isChatboxOpen && (
				<ChattingBox
					setIsOpen={setIsChatboxOpen}
					name={messageList[messageList.length - 1]?.name}
					message={messageList[messageList.length - 1]?.message}
					receivedMessage={messageList[messageList.length - 1]?.receivedMessage}
					state="chatBox"
				/>
			)}
		</div>
	)
}

export default GetStart
