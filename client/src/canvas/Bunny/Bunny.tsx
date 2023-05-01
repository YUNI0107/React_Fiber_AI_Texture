import { useEffect, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

// states
import state from '../../store/state'
import { useSnapshot } from 'valtio'

// Type issue: https://github.com/pmndrs/drei/issues/469
type GLTFResult = GLTF & {
	nodes: { [key: string]: THREE.Mesh }
	materials: { [key: string]: THREE.MeshStandardMaterial }
}

function Bunny() {
	const snap = useSnapshot(state)
	const { nodes, materials } = useGLTF('/cute_bunny.glb') as GLTFResult
	const [textureUrl, setTextureUrl] = useState(snap.decal)
	const texture = useTexture(textureUrl)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setTextureUrl(img.src)
		}

		img.src = snap.decal
	}, [snap.decal, setTextureUrl])

	return (
		<group scale={[0.3, 0.3, 0.3]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_4.geometry}
				material={materials.Kain}
				dispose={null}
			>
				<Decal key={snap.decal} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5} map={texture} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_5.geometry}
				material={materials['Material.001']}
			/>
		</group>
	)
}

export default Bunny
