// images
import { ReactComponent as Logo } from '../../assets/OpenAI_Logo.svg'

// components
import Customizer from '../Customizer'

function Overlay() {
	return (
		<>
			<div className='fixed top-20 left-20 font-schibsted'>
				<div className='mb-2'>
					<h1 className='font-bold text-7xl  text-white text-stroke-white'>BUNNY</h1>
					<h2 className='text-2xl text-white'>AI Texture Generator</h2>
				</div>

				<div className='flex items-center'>
					<p>
						With <span className='font-bold mx-2'>DALL·E</span> from
					</p>

					<Logo className='w-20' />
				</div>
			</div>

			<div className='fixed bottom-20 right-20 font-schibsted'>
				<Customizer />
			</div>
		</>
	)
}

export default Overlay
