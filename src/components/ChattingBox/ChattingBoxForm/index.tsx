import React, { FormEvent, MouseEventHandler } from 'react'

const ChattingBoxForm = () => {
	const onSubmitChatForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<form className="chat-form__field" onSubmit={onSubmitChatForm}>
			<textarea className="chat-form__msg" />
			<button className="chat-form__bt" type="submit">
				전송
			</button>
		</form>
	)
}

export default ChattingBoxForm
