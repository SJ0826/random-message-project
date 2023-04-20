import { GITHUB_URL } from 'lib/constants/constants'
import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<a className="github__link" href={GITHUB_URL}>
				<div className="github__link__icon" />
				<span className="github__text">GitHub</span>
			</a>
		</div>
	)
}

export default Footer
