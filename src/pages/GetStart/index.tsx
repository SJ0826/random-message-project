import Footer from 'components/Footer'
import Layout from 'components/Layout'
import Logo from 'components/Logo'
import MessageList from 'components/MessageList'
import SpeechBubble from 'components/SpeechBubble'
import React from 'react'
import 'style/main.css'

const GetStart = () => {
	const description = `메세지가 도착했습니다는 익명 렌덤 메신저 💌 입니다.\n쉽게 뱉을 수 없었던 비밀 또는 모르는 누군가에게 보낼 응원의 메세지 모두 좋아요.\n 💡 rule 1 메세지는 단 한명에게만 전달됩니다.\n 💡 rule 2 먼저 메세지를 보내야 익명의 누군가에게 메세지를 받을 수 있습니다.\n 💡 rule 3 메세지의 상대방은 매번 바뀝니다.`
	return (
		<div className="start__container">
			<Layout>
				<Logo />
				<SpeechBubble text={description} />
				<MessageList />
				<Footer />
			</Layout>
		</div>
	)
}

export default GetStart
