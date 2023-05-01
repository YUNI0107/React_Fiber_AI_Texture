import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three'
import { useRef } from 'react'

function GrassGround() {
	const grassRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(
		null!
	)

	const resizeTexture = (textures: THREE.Texture | THREE.Texture[]) => {
		if (Array.isArray(textures)) {
			textures.forEach((texture) => {
				texture.repeat.set(10, 10)
				texture.wrapS = texture.wrapT = RepeatWrapping
			})
		}
	}

	const [colorMap, displacementMap, normalMap, aoMap] = useTexture(
		[
			'grass/Grass_001_COLOR.jpg',
			'grass/Grass_001_DISP.png',
			'grass/Grass_001_NORM.jpg',
			'grass/Grass_001_OCC.jpg',
		],
		resizeTexture
	)

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} ref={grassRef}>
			<planeGeometry args={[20, 20]} />
			<meshStandardMaterial
				map={colorMap}
				displacementMap={displacementMap}
				normalMap={normalMap}
				aoMap={aoMap}
			/>
		</mesh>
	)
}

export default GrassGround
