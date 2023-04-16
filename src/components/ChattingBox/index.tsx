import useModal from 'lib/hooks/useModal'
import { setModalOpen } from 'lib/recoil/atom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const ChattingBox = () => {
	const setModalstate = useSetRecoilState(setModalOpen)
	return (
		<div className="chatting-box" ref={useModal()}>
			<div>chatting box</div>
			<button onClick={() => setModalstate(false)}>닫기</button>
		</div>
	)
}

export default ChattingBox
