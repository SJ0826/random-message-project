# 메세지가 도착했습니다 ✉ [![CI/CD](https://github.com/SJ0826/random-message-project/actions/workflows/CICD.yml/badge.svg)](https://github.com/SJ0826/random-message-project/actions/workflows/CICD.yml)

![image](https://user-images.githubusercontent.com/56298540/230632302-d7833ce6-66de-4032-9bee-3487d860322b.png)

## 🚩프로젝트 설명

**메세지가 도착했습니다✉**는 익명의 사용자에게 제공하는 **랜덤 메신저**입니다. 사용자는 익명 메시지를 받기 위해 하나의 메시지를 작성해야 합니다. 익명의 누군가와 메시지를 주고 받는 과정에서 낯선 새로움과 설레임을 제공하고자 프로젝트를 기획했습니다.

이 프로젝트는 누구나 참여할 수 있으며, 참여 방법은 매우 간단합니다. 우선 이름과 메시지의 내용을 작성해 등록하면, 서버에서 사용자 정보를 무작위로 추출하여 상대방에게 메시지를 보낼 수 있습니다. 메시지를 받은 사용자는 익명으로 또다른 상대방에게 메시지를 보낼 수 있으며, 이러한 과정에서 랜덤한 상대방과 소통할 수 있는 기회를 제공합니다.

한번 전송된 메세지는 데이터베이스에서 삭제되어, 사용자의 데이터를 보호하고 안정성을 높입니다. 이를 통해 메세지가 더욱 안전하게 전송되며, 불필요한 데이터 보관을 피하여 데이터베이스의 효율성을 높일 수 있습니다. 또한, 삭제된 메세지는 더이상 접근이 불가능하므로, 메세지의 기밀성과 보안을 강화하여 더욱 신뢰성 있는 서비스를 제공할 수 있습니다. 이와 같이 안전성을 높인 기능은 사용자들의 개인 정보 보호와 데이터 관리를 적극적으로 고려한 현대적인 애플리케이션의 핵심 가치를 반형하고 있습니다.

📑 이 프로젝트는 **익명성**과 **무작위성**을 가지고 있으며, 사용자의 개인 정보를 저장하지 않아 **안정성**을 보장합니다.

## ✔ 프로젝트 살펴보기
[✉ 배포링크](http://random-message.s3-website.ap-northeast-2.amazonaws.com/)

```
git clone https://github.com/SJ0826/random-message-project.git
cd random-message-project
yarn install 또는 npm install
```

## 🔨 기술 스택

- **TypeScript** : 정적 언어인 타입스크립트를 사용하여 코드의 안정성을 높입니다.
- **React**: 모듈성이 높고 유지보수에 유리합니다.
- **Recoil**: 전역 상태관리를 가능하게 합니다. 프로젝트의 크기가 크지 않아 Redux대신 도입했습니다.
- **Sass**: CSS가 가진 대부분의 기능을 지원하며 믹스인 등의 기능으로 생산성을 더욱 높일 수 있습니다.
- **FireStore**: 백엔드 없이도 간단하고 빠르게 원격으로 데이터베이스를 관리할 수 있습니다.

## ⭐ 주요 기능
![20230425172814](https://user-images.githubusercontent.com/56298540/234221995-52e345c9-4a71-4a95-8b13-c05f547bdc84.gif)

### 📄 메세지 CRUD
#### 1. 메세지 GET + DELETE
* 동작 순서: 전송 버튼 클릭 -> 전체 데이터 GET요청 (`getDocs`) -> 사용될 한개의 데이터 선택(`selectedData`) -> 해당 데이터 firestore에 삭제요청 ('deleteDoc`)
* 효과: get요청 후 delete요청이 바로 이어져 사용자가 받는 메세지 중복 방지
<h5>💾 getMessage.ts</h5>

* Firebase Firestore와 상호작용하여 메세지 데이터를 가져오고 삭제하는 로직 구현
* getRandomNum 함수를 호출해 랜덤한 인덱스를 사용해 data 배열에서 데이터 선택


```ts
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
```
#### 2. 메세지 Create

<h5>💾 createMessage.ts</h5>

*  Firestore에 새로운 메시지를 생성하는 함수

```ts
export const createMessage = async (message: MessageFormInterface) => {
	try {
		await addDoc(baseDB(), message);
	} catch (error) {
		console.error('Error in createMessage:', error);
    return undefined
	}
};
```

### 📄 전역 상태 관리 with Recoil

<h5>💾 recoilMessageState.ts</h5>

* React 상태 관리 라이브러리인 Recoil을 사용하여 메세지 리스트를 관리하는 아톰과 셀렉터 정의
* 새로 들어오는 데이터인 `newValue`의 타입을 명시해 타입 안정성 고려

```ts
export const messageListAtom = atom<MessageInterface[]>({
	key: 'messageListState',
	default: [],
})

export const messageSelector = selector({
	key: 'messageListSelector',
	get: ({ get }) => get(messageListAtom),
	set: ({ set }, newValue: MessageInterface[]) => {
		set(messageListAtom, newValue)
	},
})
```
<h5>💾 GetStart.ts</h5>

* useRecoilValue 훅을 사용하여 messageSelector 셀렉터의 값을 사용
* ChattingBox에 Props로 전달해 컴포넌트 재활용 

```ts
const GetStart = () => {
	const description = PROFECT_DESCRIPTION
	const messageList = useRecoilValue<MessageInterface[]>(messageSelector)
	const [isChatboxOpen, setIsChatboxOpen] = useRecoilState(
		chatBoxModalStateAtom,
	)
	return (
		<div className="start__container">
			<Layout>
				<Logo />
				<SpeechBubble text={description} bubbleState={'default'} />
				<MessageList />
				<Footer />
			</Layout>
			{isChatboxOpen && (
				<ChattingBox
					setIsChatboxOpen={setIsChatboxOpen}
					name={messageList[messageList.length - 1]?.name}
					message={messageList[messageList.length - 1]?.message}
					receivedMessage={messageList[messageList.length - 1]?.receivedMessage}
					state="chatBox"
				/>
			)}
		</div>
	)
}
```
### 📄 모달 컴포넌트 handler custom hook

* 역할: 모달의 바깥 영역을 클릭했을 때도 창이 닫힘
* useRef를 사용하여 modalRef라는 HTMLDivElement 참조
* 모바일 환경을 고려해 터치 이벤트 추가
* 컴포넌트가 언마운트되거나 의존성이 변경되었을때 이벤트 리스터를 제거하기 위해 clean-up 함수 반환
* event?.target as Node와 같이 옵셔널 체이닝과 타입 단언을 통해 event가 존재하지 않을 경우 오류가 발생하지 않도록 유도

<h5>💾 useModal.ts</h5>

```ts
const useModal = (setIsOpen: SetterOrUpdater<boolean>) => {
	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const modalHandler = (event: MouseEvent | TouchEvent) => {
			if (modalRef.current && !modalRef.current.contains(event?.target as Node))
				setIsOpen(false)
		}

		document.addEventListener('mousedown', modalHandler)
		document.addEventListener('touchstart', modalHandler)

		return () => {
			document.removeEventListener('mousedown', modalHandler)
			document.removeEventListener('touchstart', modalHandler)
		}
	})

	return modalRef
}
```

### 📄 message Form Input custom hook

* Message Form Recoil 상태 관리를 위한 hook
* messageFormAtom 상태의 값을 업데이트하는 setMessageForm 함수와, 입력 값이 변경될 때 호출되는 handleInputChange 함수를 반환

<h5>💾 useMessageFormInput</h5>

```ts
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
```
### 📄 반응형 디자인 고려

* 모바일 환경을 고려하여 사용자 경험을 최적화하기 위해 우리는 반응형 디자인을 도입

![20230425184737](https://user-images.githubusercontent.com/56298540/234241029-8dc6ddc4-2679-489e-bd4c-d32f0ddefe1e.gif)
