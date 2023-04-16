import useMessageFormInput from 'lib/hooks/useMessageFormInput'
import React, { FormEvent } from 'react'

const ChattingBoxForm = () => {
	const onSubmitChatForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
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
