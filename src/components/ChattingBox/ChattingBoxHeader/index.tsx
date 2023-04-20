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
	const nameInputLabel = state === 'chatBox' ? 'Name' : 'From'
	const nameInputValue = state === 'chatBox' ? messageForm.name : name
	const namePlaceholder = state === 'chatBox' ? '이름을 입력해주세요' : ''

	return (
		<div className="chattingBox__header">
			<div className="chattingBox__header__btnWrapper">
				<span className="chattingBox__header__text">메세지 보내기</span>
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
