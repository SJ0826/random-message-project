import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import React, { FormEvent, useRef } from 'react'
import { useRecoilState } from 'recoil'

const ChattingBoxForm = () => {
	const messageInputRef = useRef<HTMLTextAreaElement>(null)
	const [messageForm, setMessageForm] = useRecoilState(messageFormAtom)
	const defaultRecoilMessageForm = { ...messageForm }

	const onChangeMessageInput = () => {
		if (messageInputRef.current) {
			defaultRecoilMessageForm.message = messageInputRef.current?.value
			setMessageForm(defaultRecoilMessageForm)
		}
	}
	const onSubmitChatForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<form className="chat-form__field" onSubmit={onSubmitChatForm}>
			<textarea
				id="message"
				className="chat-form__msg"
				ref={messageInputRef}
				onChange={onChangeMessageInput}
			/>
			<button className="chat-form__bt" type="submit">
				전송
			</button>
		</form>
	)
}

export default ChattingBoxForm
