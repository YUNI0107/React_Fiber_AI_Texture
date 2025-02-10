import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls, Cloud, Clouds } from '@react-three/drei'

// components
import Bunny from '../Bunny'
import BackDrop from '../BackDrop'
import GrassGround from '../GrassGround'
import ControlSphere from '../ControlSphere'
import { Suspense } from 'react'

function CanvasComponent() {
	return (
		<Canvas
			camera={{ position: [0, 0, 5], fov: 25 }}
			shadows
			gl={{ preserveDrawingBuffer: true, toneMapping: THREE.CineonToneMapping }}
			className='w-full max-w-full h-full'
		>
			<Environment preset='park' background blur={0.3} environmentIntensity={1.5} />
			<ambientLight intensity={1} />
			<pointLight position={[10, 10, 10]} intensity={1} color='#ffeabf' />
			<OrbitControls maxDistance={5} autoRotate={true} autoRotateSpeed={0.5} />

			<Center>
				<Suspense>
					<Bunny />
				</Suspense>

				<BackDrop />
			</Center>

			<Clouds material={THREE.MeshBasicMaterial}>
				<Cloud scale={0.2} position={[2, 0, -5]} opacity={0.1} />
				<Cloud scale={0.2} position={[-3, 0, -2]} />
				<Cloud scale={0.1} position={[1.5, 0.5, 1]} />
			</Clouds>

			<GrassGround />
			<ControlSphere />
		</Canvas>
	)
}

export default CanvasComponent
