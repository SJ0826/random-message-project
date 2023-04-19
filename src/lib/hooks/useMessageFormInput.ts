import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import { MessageFormInterface } from 'lib/types/messageInterface'
import { useSetRecoilState } from 'recoil'

const useMessageFormInput = () => {
	const setMessageForm =
		useSetRecoilState<MessageFormInterface>(messageFormAtom)

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, value } = event.target
		setMessageForm((prevState) => ({
			...prevState,
			[id]: value,
		}))
	}

	return handleInputChange
}

export default useMessageFormInput
