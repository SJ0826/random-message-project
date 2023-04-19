import { getDocs } from 'firebase/firestore'
import baseDB from './baseDB'
import { getRandomNum } from 'lib/util/getRandomNum'

const getMessage = async () => {
	const respone = await getDocs(baseDB())
	const data = respone.docs.map((doc) => ({ ...doc.data() }))
	return data[getRandomNum(data.length - 1)]
}

export default getMessage
