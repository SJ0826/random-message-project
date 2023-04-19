import { firebaseDB } from '../../firebase'
import { collection } from 'firebase/firestore'

const baseDB = () => {
	const db = collection(firebaseDB, 'Messages')
	return db
}

export default baseDB
