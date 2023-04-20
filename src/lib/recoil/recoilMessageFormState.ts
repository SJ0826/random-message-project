import { MessageFormInterface } from 'lib/types/messageInterface'
import { atom } from 'recoil'

export const messageFormAtom = atom<MessageFormInterface>({
	key: 'messageFormState',
	default: {
		name: '',
		message: '',
	},
})
