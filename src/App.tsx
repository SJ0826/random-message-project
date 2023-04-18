import { firebaseDB } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import GetStart from 'pages/GetStart'
import React, { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'

function App() {
	const [message, setMessage] = useState<{ [x: string]: string }[]>([])

	const db = collection(firebaseDB, 'Messages')

	useEffect(() => {
		const test = async () => {
			const data = await getDocs(db)
			setMessage(data.docs.map((doc) => ({ ...doc.data() })))
		}
		test()

		const createUser = async () => {
			await addDoc(db, { name: 'sujin', message: 'hihi' })
		}

		createUser()
	}, [])

	return (
		<RecoilRoot>
			<GetStart />
		</RecoilRoot>
	)
}

export default App
