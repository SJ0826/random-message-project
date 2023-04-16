export interface MessageFormInterface {
	name: string
	message: string
}

export interface MessageInterface extends MessageFormInterface {
	id: number
}
