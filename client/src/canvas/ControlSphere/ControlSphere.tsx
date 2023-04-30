import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Text } from '@react-three/drei'
import { Group } from 'three'

function ControlSphere() {
	const [hover, setHover] = useState(false)
	const sphere = useRef<Group>(null!)

	const [colorMap, normalMap, aoMap, roughnessMap, displacementMap] = useTexture([
		'waffle/Waffle_001_basecolor.jpg',
		'waffle/Waffle_001_normal.jpg',
		'waffle/Waffle_001_ambientOcclusion.jpg',
		'waffle/Waffle_001_roughness.jpg',
		'waffle/Waffle_001_height.png',
	])

	useFrame(({ clock }) => {
		if (sphere.current) {
			sphere.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05
		}
	})

	return (
		<group ref={sphere} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
			<mesh scale={hover ? [0.25, 0.25, 0.25] : [0.2, 0.2, 0.2]} position={[-0.8, 0, 0]}>
				<sphereGeometry args={[1, 120, 120]} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					aoMap={aoMap}
					roughnessMap={roughnessMap}
					displacementMap={displacementMap}
				/>

				<Text position={[0, 0, 2]} fontSize={0.5} font='/SchibstedGrotesk-Black.ttf'>
					Upload
					<meshBasicMaterial color='#fff' toneMapped={false} />
				</Text>
			</mesh>
		</group>
	)
}

export default ControlSphere
