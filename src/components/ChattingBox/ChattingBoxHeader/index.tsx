import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import { setModalOpen } from 'lib/recoil/recoilMessageState'
import React, { useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

const ChattingBoxHeader = () => {
	const setModalstate = useSetRecoilState(setModalOpen)
	const [messageForm, setMessageForm] = useRecoilState(messageFormAtom)
	const defaultRecoilMessageForm = { ...messageForm }
	const inputRef = useRef<HTMLInputElement>(null)

	const onChangeNameInput = () => {
		if (inputRef.current) {
			defaultRecoilMessageForm.name = inputRef.current?.value
			setMessageForm(defaultRecoilMessageForm)
		}
	}

	return (
		<div className="chattingBox__header">
			<div className="chattingBox__header__btnWrapper">
				<span className="chattingBox__header__text">메세지 보내기</span>
				<button
					className="chattingBox__header__closeBtn"
					onClick={() => setModalstate(false)}
				>
					✖
				</button>
			</div>
			<div className="chattingBox__header__name">
				<span className="chattingBox__header__nameText">Name</span>
				<input
					ref={inputRef}
					id="name"
					className="chattingBox__header__input"
					placeholder="이름을 입력해주세요"
					onChange={onChangeNameInput}
				/>
			</div>
		</div>
	)
}

export default ChattingBoxHeader
