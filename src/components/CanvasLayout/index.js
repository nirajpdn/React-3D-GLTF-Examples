import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "../../styles/Home.module.css";
const CanvasLayout = ({ children }) => {
  return (
    <Canvas className={styles.canvas}>
      <ambientLight />
      <spotLight
        intensity={0.9}
        angle={10}
        penumbra={1}
        position={[0, 15, 10]}
        castShadow
      />
      <>{children}</>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default CanvasLayout;
