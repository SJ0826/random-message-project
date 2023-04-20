import {
	CHATBOX_PLACEHOLDER,
	CHATBOX_TITLE,
	NAME_INPUT_LABEL_CHATBOX,
	NAME_INPUT_LABEL_LOGGING,
} from 'lib/constants/constants'
import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import React from 'react'
import { SetterOrUpdater, useRecoilValue } from 'recoil'

interface ChattingBoxHeaderProps {
	setIsOpen: SetterOrUpdater<boolean>
	name: string
	state: 'chatBox' | 'messageLogging'
}
const ChattingBoxHeader = ({
	setIsOpen,
	name,
	state,
}: ChattingBoxHeaderProps) => {
	const messageForm = useRecoilValue(messageFormAtom)
	const nameInputLabel =
		state === 'chatBox' ? NAME_INPUT_LABEL_CHATBOX : NAME_INPUT_LABEL_LOGGING
	const nameInputValue = state === 'chatBox' ? messageForm.name : name
	const namePlaceholder = state === 'chatBox' ? CHATBOX_PLACEHOLDER : ''

	return (
		<div className="chattingBox__header">
			<div className="chattingBox__header__btnWrapper">
				<span className="chattingBox__header__text">{CHATBOX_TITLE}</span>
				<button
					className="chattingBox__header__closeBtn"
					onClick={() => setIsOpen(false)}
				>
					✖
				</button>
			</div>
			<div className="chattingBox__header__name">
				<span className="chattingBox__header__nameText">{nameInputLabel}</span>
				<input
					id="name"
					className="chattingBox__header__input"
					placeholder={namePlaceholder}
					onChange={useMessageFormInput()}
					value={nameInputValue}
				/>
			</div>
		</div>
	)
}

export default React.memo(ChattingBoxHeader)
