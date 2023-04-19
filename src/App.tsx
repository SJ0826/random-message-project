import { firebaseDB } from './firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import GetStart from 'pages/GetStart'
import React, { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'

function App() {
	return (
		<RecoilRoot>
			<GetStart />
		</RecoilRoot>
	)
}

export default App
