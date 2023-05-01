function Loading() {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center font-schibsted'>
			<div className='flex items-center text-gray-800'>
				<h1 className='text-7xl font-bold mb-2 mr-2'>🐰 LOADING</h1>

				<i className='ri-loader-4-fill text-7xl animate-spin'></i>
			</div>

			<p>Bunny AI Texture Generator</p>
		</div>
	)
}

export default Loading
