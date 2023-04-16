import { setModalOpen } from 'lib/recoil/atom'
import { useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil'

const useModal = () => {
	const modalRef = useRef<HTMLDivElement>(null)
	const setModalstate = useSetRecoilState(setModalOpen)
	useEffect(() => {
		const modalHandler = () => {
			if (modalRef.current && !modalRef.current.contains(event?.target as Node))
				setModalstate(false)
		}

		document.addEventListener('mousedown', modalHandler)
		document.addEventListener('touchstart', modalHandler)
	})

	return modalRef
}

export default useModal
