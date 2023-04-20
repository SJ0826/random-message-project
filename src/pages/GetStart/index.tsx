import ChattingBox from 'components/ChattingBox'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import MessageList from 'components/MessageList'
import SpeechBubble from 'components/SpeechBubble'
import { messageSelector } from 'lib/recoil/recoilMessageState'
import { chatBoxModalStateAtom } from 'lib/recoil/recoilModalOpenState'
import { MessageInterface } from 'lib/types/messageInterface'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import 'style/main.css'

const GetStart = () => {
	const description = `메세지가 도착했습니다는 익명 렌덤 메신저 💌 입니다.\n쉽게 뱉을 수 없었던 비밀 또는 모르는 누군가에게 보낼 응원의 메세지 모두 좋아요.\n 💡 rule 1 메세지는 단 한명에게만 전달됩니다.\n 💡 rule 2 먼저 메세지를 보내야 익명의 누군가에게 메세지를 받을 수 있습니다.\n 💡 rule 3 메세지의 상대방은 매번 바뀝니다.`
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
				/>
			)}
		</div>
	)
}

export default GetStart
