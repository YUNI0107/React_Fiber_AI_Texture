import { proxy } from 'valtio'

interface IState {
	decal: string
	isGenerating: boolean
	prompt: string
}

const state = proxy<IState>({
	decal: '/rabbit.jpeg',
	isGenerating: false,
	prompt: '',
})

export default state
