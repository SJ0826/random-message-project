import SpeechBubble from 'components/SpeechBubble'
import React from 'react'
const ChattingPreview = () => {
	return (
		<main className="preview__bubbles">
			<SpeechBubble
				text={
					'fsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsd'
				}
				bubbleState={'receive'}
			/>
			<SpeechBubble text={'hi'} bubbleState={'send'} />
		</main>
	)
}

export default ChattingPreview
