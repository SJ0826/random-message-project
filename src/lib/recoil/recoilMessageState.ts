import { MessageInterface } from 'lib/types/messageInterface'
import { atom, selector } from 'recoil'

export const messageListAtom = atom<MessageInterface[]>({
	key: 'messageListState',
	default: [],
})

export const messageSelector = selector({
	key: 'messageListSelector',
	get: ({ get }) => get(messageListAtom),
	set: ({ set }, newValue: MessageInterface[]) => {
		set(messageListAtom, (prevValue) => [...prevValue, newValue[0]])
	},
})

export const setModalOpen = atom({
	key: 'modalOpenState',
	default: false,
})
