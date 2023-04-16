import useModal from 'lib/hooks/useModal'
import React from 'react'
import ChattingBoxHeader from './ChattingBoxHeader'
import ChattingBoxForm from './ChattingBoxForm'
import ChattingPreview from './ChattingPreview'

const ChattingBox = () => {
	return (
		<header className="chattingBox__background">
			<div className="chattingBox" ref={useModal()}>
				<ChattingBoxHeader />
				<ChattingPreview />
				<ChattingBoxForm />
			</div>
		</header>
	)
}

export default ChattingBox
