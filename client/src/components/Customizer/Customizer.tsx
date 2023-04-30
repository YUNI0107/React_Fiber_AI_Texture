function Customizer() {
	return (
		<>
			<div className='mb-2'>
				<div className='flex items-center text-white'>
					<p className='mr-2'>Use english to type your description</p>
					<i className='ri-question-answer-line text-2xl'></i>
				</div>
				<span className='bg-white p-1 text-sm'>
					Ex. I want a texture with cute pink dot and without text...
				</span>
			</div>

			<textarea
				className='outline-none px-3 py-2 rounded-md'
				name='prompt'
				id='prompt'
				cols={50}
				rows={5}
			></textarea>
		</>
	)
}

export default Customizer
