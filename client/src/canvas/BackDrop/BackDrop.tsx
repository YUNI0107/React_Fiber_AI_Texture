import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useRef } from 'react'

function BackDrop() {
	const shadows = useRef(null!)

	return (
		<AccumulativeShadows
			ref={shadows}
			position={[0, -0.28, 0]}
			frames={60}
			alphaTest={0.85}
			scale={10}
			opacity={0.5}
			color='#b5abaa'
		>
			<RandomizedLight amount={5} radius={5} intensity={0.5} ambient={0.25} position={[0, 5, 5]} />

			<RandomizedLight
				amount={4}
				radius={10}
				intensity={0.2}
				ambient={0.25}
				position={[10, 10, 5]}
			/>
		</AccumulativeShadows>
	)
}

export default BackDrop
