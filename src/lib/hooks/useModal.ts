import { useEffect, useRef } from 'react'
import { SetterOrUpdater } from 'recoil'

const useModal = (setIsOpen: SetterOrUpdater<boolean>) => {
	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const modalHandler = () => {
			if (modalRef.current && !modalRef.current.contains(event?.target as Node))
				setIsOpen(false)
		}

		document.addEventListener('mousedown', modalHandler)
		document.addEventListener('touchstart', modalHandler)
	})

	return modalRef
}

export default useModal
