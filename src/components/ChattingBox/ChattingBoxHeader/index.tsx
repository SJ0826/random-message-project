import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { setModalOpen } from 'lib/recoil/recoilMessageState'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const ChattingBoxHeader = () => {
	const setModalstate = useSetRecoilState(setModalOpen)

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
					id="name"
					className="chattingBox__header__input"
					placeholder="이름을 입력해주세요"
					onChange={useMessageFormInput()}
				/>
			</div>
		</div>
	)
}

export default ChattingBoxHeader
