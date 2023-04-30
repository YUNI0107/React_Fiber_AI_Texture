import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls, Cloud } from '@react-three/drei'

// components
import Bunny from '../Bunny'
import BackDrop from '../BackDrop'
import GrassGround from '../GrassGround'
import ControlSphere from '../ControlSphere'

function CanvasComponent() {
	return (
		<Canvas
			camera={{ position: [0, 0, 3], fov: 25 }}
			shadows
			gl={{ preserveDrawingBuffer: true }}
			className='w-full max-w-full h-full'
		>
			<Environment preset='park' background blur={0.5} />
			<ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} intensity={1} color='#ffeabf' />
			<OrbitControls maxDistance={5} />

			<Center>
				<Bunny />
				<BackDrop />
			</Center>

			<Cloud scale={0.2} position={[2, 0, -5]} opacity={0.1} />
			<Cloud scale={0.2} position={[-3, 0, -2]} />
			<Cloud scale={0.1} position={[1.5, 0.5, 1]} />
			<GrassGround />
			<ControlSphere />
		</Canvas>
	)
}

export default CanvasComponent
