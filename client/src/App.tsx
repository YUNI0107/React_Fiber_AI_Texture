import './index.css'
import 'remixicon/fonts/remixicon.css'

// components
import Overlay from './components/Overlay'
import CanvasComponent from './canvas/CanvasComponent'

function App() {
	return (
		<main className='relative w-full h-screen overflow-hidden'>
			<CanvasComponent />
			<Overlay />
		</main>
	)
}

export default App
