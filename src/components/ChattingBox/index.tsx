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
}
const ChattingBox = ({
	setIsOpen,
	name,
	message,
	receivedMessage,
}: ChattingBoxProps) => {
	return (
		<div className="chattingBox__background">
			<div className="chattingBox" ref={useModal(setIsOpen)}>
				<ChattingBoxHeader setIsOpen={setIsOpen} name={name} />
				<ChattingView message={message} receivedMessage={receivedMessage} />
				<ChattingBoxForm />
			</div>
		</div>
	)
}

export default ChattingBox
