import useModal from 'lib/hooks/useModal'
import React, { useState } from 'react'
import ChattingBoxHeader from './ChattingBoxHeader'
import ChattingBoxForm from './ChattingBoxForm'
import ChattingView from './ChattingView'

const ChattingBox = () => {
	const [isSendMessage, setIsSendMessage] = useState(false)
	return (
		<header className="chattingBox__background">
			<div className="chattingBox" ref={useModal()}>
				<ChattingBoxHeader />
				<ChattingView />
				<ChattingBoxForm />
			</div>
		</header>
	)
}

export default ChattingBox
