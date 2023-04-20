import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import React from 'react'
import { SetterOrUpdater, useRecoilValue } from 'recoil'

interface ChattingBoxHeaderProps {
	setIsOpen: SetterOrUpdater<boolean>
	name: string
}
const ChattingBoxHeader = ({ setIsOpen, name }: ChattingBoxHeaderProps) => {
	const messageForm = useRecoilValue(messageFormAtom)

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
				<span className="chattingBox__header__nameText">Name</span>
				<input
					id="name"
					className="chattingBox__header__input"
					placeholder="이름을 입력해주세요"
					onChange={useMessageFormInput()}
					value={messageForm.name}
				/>
			</div>
		</div>
	)
}

export default ChattingBoxHeader
