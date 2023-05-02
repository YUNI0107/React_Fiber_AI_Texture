import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Text } from '@react-three/drei'
import { Group } from 'three'
import { useSnapshot } from 'valtio'

// states
import state from '../../store/state'

function ControlSphere() {
	const snap = useSnapshot(state)

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

	// operations
	const handleSubmit = () => {
		if (snap.isGenerating) {
			return
		}

		if (!snap.prompt) {
			alert('No Prompt! Please Check.')
			return
		}

		state.isGenerating = true

		fetch('http://localhost:3000/api/v1/dalle', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt: snap.prompt,
			}),
		})
			// .then((response) => response.json())
			// .then((data) => {
			// 	handleDecal(data.photo)
			// })
			.then((response) => response.blob())
			.then((blob) => {
				const imageURL = URL.createObjectURL(blob)
				handleDecal(imageURL)
			})
			.catch((error) => {
				console.log(`GetDecal Error: ${error}`)
			})
			.finally(() => {
				state.isGenerating = false
			})
	}

	const handleDecal = (result: string) => {
		state.decal = result
	}

	return (
		<group
			ref={sphere}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
			onClick={handleSubmit}
		>
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
					{snap.isGenerating ? 'Generating...' : 'Upload'}
					<meshBasicMaterial color='#fff' toneMapped={false} />
				</Text>
			</mesh>
		</group>
	)
}

export default ControlSphere
