import getToday from 'lib/util/getToday'
import React from 'react'
import 'style/main.css'

const GetStart = () => {
	const date = getToday()
	return (
		<div className="start__container">
			<span className="start__title">✉ 메세지가 도착했습니다</span>
			<section className="start__description__wrapper">
				<div className="start__description__icon" />
				<div className="start__description__content__wrapper">
					<span className="start__description__content">
						메세지가 도착했습니다는 익명 렌덤 메신저 💌 입니다.
						<br />
						쉽게 뱉을 수 없었던 비밀 또는 모르는 누군가에게 보낼 응원의 메세지
						모두 좋아요.
						<br /> 💡 rule 1 메세지는 단 한명에게만 전달됩니다.
						<br /> 💡 rule 2 먼저 메세지를 보내야 익명의 누군가에게 메세지를
						받을 수 있습니다.
						<br /> 💡 rule 3 메세지의 상대방은 매번 바뀝니다.
					</span>
					<div className="start__description__date">{date}</div>
				</div>
			</section>
		</div>
	)
}

export default GetStart
