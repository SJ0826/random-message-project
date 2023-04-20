import { deleteDoc, doc, getDocs } from 'firebase/firestore'
import baseDB from './baseDB'
import { getRandomNum } from 'lib/util/getRandomNum'
import { firebaseDB } from '../../firebase'

interface docInterface {
	message: string
	name: string
}

const getMessage = async () => {
	try {
		const response = await getDocs(baseDB())
		const data = response.docs.map((doc) => ({
			...(doc.data() as docInterface),
			id: doc.id,
		}))
		const selectedData = data[getRandomNum(data.length - 1)]
		await deleteDoc(doc(firebaseDB, 'Messages', selectedData.id))
		return selectedData
	} catch (error) {
		console.error('Error in getMessage:', error)
		return undefined
	}
}

export default getMessage
