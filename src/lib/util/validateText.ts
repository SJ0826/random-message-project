const validateText = (type: 'name' | 'message', value: string) => {
	const regexp = {
		name: /^.{2,}$/,
		message: /^.{15,}$/,
	}
	return regexp[type].test(value)
}

export default validateText
