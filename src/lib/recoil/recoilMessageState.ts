import { MessageInterface } from 'lib/types/messageInterface'
import { atom } from 'recoil'

export const messageListAtom = atom<MessageInterface[]>({
	key: 'messageListState',
	default: [
		{ id: 1, name: '성진', message: 'hi' },
		{ id: 2, name: '영현', message: 'hi' },
		{ id: 3, name: '원필', message: 'hi' },
		{ id: 4, name: '도운', message: 'hi' },
	],
})

export const setModalOpen = atom({
	key: 'modalOpenState',
	default: false,
})
