import { proxy } from 'valtio'

const state = proxy({
	color: 'orange',
})

export default state
