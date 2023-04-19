import { createMessage } from 'lib/db/createMessage'
import getMessage from 'lib/db/getMessage'
import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import { messageSelector } from 'lib/recoil/recoilMessageState'
import { MessageInterface } from 'lib/types/messageInterface'
import React, { FormEvent } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const ChattingBoxForm = () => {
	const messageForm = useRecoilValue(messageFormAtom)
	const setMessageList = useSetRecoilState<MessageInterface[]>(messageSelector)
	const onSubmitChatForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const receivedMessage = await getMessage()
		setMessageList([
			{
				id: receivedMessage.id,
				name: receivedMessage.name,
				receivedMessage: receivedMessage.message,
				message: messageForm.message,
			},
		])
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
