import { useGLTF } from '@react-three/drei'

function Bunny() {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { nodes, materials } = useGLTF('/cute_bunny.glb')
	console.log(nodes, materials)

	return (
		<group scale={[0.3, 0.3, 0.3]}>
			<mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Kain} />
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
