import getToday from 'lib/util/getToday'
import React from 'react'

interface SpeechBubbleProps {
	text: string
}

const SpeechBubble = ({ text }: SpeechBubbleProps) => {
	const date = getToday()
	return (
		<section className="start__description__wrapper">
			<div className="start__description__icon" />
			<div className="start__description__content__wrapper">
				<span className="start__description__content">
					{text.split('<br/>').map((txt, index) => (
						<div key={index}>{txt}</div>
					))}
				</span>
				<div className="start__description__date">{date}</div>
			</div>
		</section>
	)
}

export default SpeechBubble
