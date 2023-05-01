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

			<div className='fixed bottom-20 left-20 font-schibsted text-white'>
				<h2 className='text-2xl'>Resources - </h2>
				<a
					className='mr-4'
					target='_blank'
					href='https://sketchfab.com/3d-models/cute-bunny-037f632eb1cc45889219629187df68db'
				>
					<i className='ri-folder-download-fill mr-2'></i>Model
				</a>
				<a href='https://3dtextures.me/' target='_blank'>
					<i className='ri-folder-download-fill mr-2'></i>Texture
				</a>
			</div>
		</>
	)
}

export default Overlay
