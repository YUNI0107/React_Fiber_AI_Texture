import { Suspense } from 'react'

import './index.css'
import 'remixicon/fonts/remixicon.css'

// components
import Overlay from './components/Overlay'
import Loading from './components/Loading'
import CanvasComponent from './canvas/CanvasComponent'

function App() {
	return (
		<main className='relative w-full h-screen overflow-hidden'>
			<Suspense fallback={<Loading />}>
				<CanvasComponent />
				<Overlay />
			</Suspense>
		</main>
	)
}

export default App
