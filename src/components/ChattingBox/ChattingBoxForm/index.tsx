import {
	TRANSFER_COMPLETE,
	TRANSFER_NOT_COMPLETED,
} from 'lib/constants/constants'
import { createMessage } from 'lib/db/createMessage'
import getMessage from 'lib/db/getMessage'
import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import { messageFormAtom } from 'lib/recoil/recoilMessageFormState'
import { messageSelector } from 'lib/recoil/recoilMessageState'
import { MessageInterface } from 'lib/types/messageInterface'
import React, { FormEvent, useCallback, useRef } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

interface ChattingBoxFormProps {
	isDisabled: boolean
}
const ChattingBoxForm = ({ isDisabled }: ChattingBoxFormProps) => {
	const inputRef = useRef<null | HTMLTextAreaElement>(null)
	const messageForm = useRecoilValue(messageFormAtom)
	const setMessageList = useSetRecoilState<MessageInterface[]>(messageSelector)

	const onSubmitChatForm = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			inputRef.current.value = ''
			const receivedMessage = await getMessage()

			setMessageList((prevValue) => [
				...prevValue,
				{
					id: receivedMessage.id,
					name: receivedMessage.name,
					receivedMessage: receivedMessage.message,
					message: messageForm.message,
				},
			])
			createMessage(messageForm)
		},
		[messageForm, setMessageList],
	)

	return (
		<form className="chat-form__field" onSubmit={onSubmitChatForm}>
			<textarea
				id="message"
				className="chat-form__msg"
				onChange={useMessageFormInput()}
				ref={inputRef}
				disabled={isDisabled}
			/>
			<button className="chat-form__bt" type="submit" disabled={isDisabled}>
				{isDisabled ? TRANSFER_COMPLETE : TRANSFER_NOT_COMPLETED}
			</button>
		</form>
	)
}

export default React.memo(ChattingBoxForm)
