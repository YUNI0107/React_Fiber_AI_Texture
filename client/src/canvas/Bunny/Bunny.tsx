import * as THREE from 'three'
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
	const texture = useTexture(snap.decal)

	return (
		<group dispose={null} scale={[0.3, 0.3, 0.3]}>
			<mesh geometry={nodes.Object_4.geometry} material={materials.Kain}>
				<Decal key={snap.decal} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={5}>
					<meshBasicMaterial
						map={texture}
						polygonOffset
						polygonOffsetFactor={-1} // The material should take precedence over the original
					/>
				</Decal>
			</mesh>
			<mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
		</group>
	)
}

useGLTF.preload('/cute_bunny.glb')
export default Bunny
