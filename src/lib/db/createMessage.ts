import { addDoc } from 'firebase/firestore'
import baseDB from './baseDB'
import { MessageFormInterface } from 'lib/types/messageInterface'

export const createMessage = (message: MessageFormInterface) => {
	addDoc(baseDB(), message)
}
