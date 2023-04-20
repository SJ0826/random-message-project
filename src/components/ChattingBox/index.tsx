import useModal from 'lib/hooks/useModal'
import React from 'react'
import ChattingBoxHeader from './ChattingBoxHeader'
import ChattingBoxForm from './ChattingBoxForm'
import ChattingView from './ChattingView'
import { SetterOrUpdater } from 'recoil'

interface ChattingBoxProps {
	setIsOpen: SetterOrUpdater<boolean>
	name: string
	message: string
	receivedMessage: string
	state: 'chatBox' | 'messageLogging'
}
const ChattingBox = ({
	setIsOpen,
	name,
	message,
	receivedMessage,
	state,
}: ChattingBoxProps) => {
	return (
		<div className="chattingBox__background">
			<div className="chattingBox" ref={useModal(setIsOpen)}>
				<ChattingBoxHeader setIsOpen={setIsOpen} name={name} state={state} />
				<ChattingView message={message} receivedMessage={receivedMessage} />
				<ChattingBoxForm state={state} />
			</div>
		</div>
	)
}

export default React.memo(ChattingBox)
