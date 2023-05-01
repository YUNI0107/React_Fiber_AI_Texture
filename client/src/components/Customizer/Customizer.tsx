import { ChangeEvent, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import classnames from 'classnames'

// states
import state from '../../store/state'

function Customizer() {
	const snap = useSnapshot(state)
	const timer = useRef<number | null>(null)
	const [prompt, setPrompt] = useState('')

	// operations
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setPrompt(e.target.value)

		if (timer.current) clearTimeout(timer.current)

		timer.current = setTimeout(() => {
			state.prompt = e.target.value
		}, 100)
	}

	return (
		<>
			<div className='mb-2'>
				<div className='flex items-center text-white'>
					<p className='mr-2'>Use english to type your description</p>
					<i className='ri-question-answer-line text-2xl'></i>
				</div>
				<span className='bg-white p-1 text-sm'>
					Ex. I want a pattern with cute pink dot and without text...
				</span>
			</div>

			<textarea
				className={classnames(
					'outline-none px-3 py-2 rounded-md focus:outline-none focus:ring-offset-0 focus:ring-0 focus:border-none',
					{
						'bg-gray-200': snap.isGenerating,
					}
				)}
				disabled={snap.isGenerating}
				name='prompt'
				id='prompt'
				value={prompt}
				onChange={handleOnChange}
				cols={50}
				rows={5}
			></textarea>
		</>
	)
}

export default Customizer
