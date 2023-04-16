import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

const useMessageFormInput = () => {
	const [messageForm, setMessageForm] = useRecoilState(messageFormAtom)

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			event.preventDefault()
			const { id, value } = event.target
			setMessageForm((prevState) => ({
				...prevState,
				[id]: value,
			}))
		},
		[messageForm],
	)
	return handleInputChange
}

export default useMessageFormInput
