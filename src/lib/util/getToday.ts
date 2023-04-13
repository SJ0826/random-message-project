const getToday = () => {
	const today = new Date()
	const year = today.getFullYear()
	const month =
		today.getMonth() + 1 > 9
			? (today.getMonth() + 1).toString()
			: '0' + (today.getMonth() + 1)
	const date =
		today.getDate() > 9
			? today.getDate().toString()
			: '0' + today.getDate().toString()
	const datOfTheWeek = ' ' + '일월화수목큼토'.charAt(today.getUTCDay()) + '요일'
	return year + '-' + month + '-' + date + datOfTheWeek
}

export default getToday
