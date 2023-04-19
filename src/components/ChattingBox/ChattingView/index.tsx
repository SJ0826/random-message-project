import SpeechBubble from 'components/SpeechBubble'
import React from 'react'
const ChattingPreview = () => {
	return (
		<main className="preview__bubbles">
			<SpeechBubble text={'hi'} bubbleState={'send'} />
			<SpeechBubble
				text={
					'fsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsdfsfdsdfsdfsdfsd'
				}
				bubbleState={'receive'}
			/>
		</main>
	)
}

export default ChattingPreview
