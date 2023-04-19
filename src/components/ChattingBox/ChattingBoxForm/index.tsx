import { createMessage } from 'lib/db/createMessage'
import getMessage from 'lib/db/getMessage'
import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import React, { FormEvent } from 'react'
import { useRecoilValue } from 'recoil'

const ChattingBoxForm = () => {
	const messageForm = useRecoilValue(messageFormAtom)
	const onSubmitChatForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await getMessage()
		createMessage(messageForm)
	}

	return (
		<form className="chat-form__field" onSubmit={onSubmitChatForm}>
			<textarea
				id="message"
				className="chat-form__msg"
				onChange={useMessageFormInput()}
			/>
			<button className="chat-form__bt" type="submit">
				전송
			</button>
		</form>
	)
}

export default ChattingBoxForm
