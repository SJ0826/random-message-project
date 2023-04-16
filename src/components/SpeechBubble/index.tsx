import classNames from 'classnames'
import getToday from 'lib/util/getToday'
import React from 'react'

interface SpeechBubbleProps {
	text: string
	bubbleState: string
}

const SpeechBubble = ({ text, bubbleState }: SpeechBubbleProps) => {
	const date = getToday()

	return (
		<div className="start__description__wrapper">
			<div className={classNames('start__description__icon', bubbleState)} />
			<div className="start__description__content__wrapper">
				<span
					className={classNames('start__description__content', bubbleState)}
				>
					{text.split('<br/>').map((txt, index) => (
						<div key={index}>{txt}</div>
					))}
				</span>
				<div className={classNames('start__description__date', bubbleState)}>
					{date}
				</div>
			</div>
		</div>
	)
}

export default SpeechBubble
