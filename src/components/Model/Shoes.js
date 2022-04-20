import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ShoeModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe/shoe.gltf");
  useEffect(() => {
    if (group) {
      group.current.rotation.y = Math.PI / 2;
      group.current.rotation.x = 0;
      group.current.rotation.z = 0;
    }
  }, [group]);
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.pitch}
      />
    </group>
  );
}
