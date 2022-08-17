import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
import Car from "./Car";

export default function App() {
  return (
    <Canvas gl={{ toneMappingExposure: 1.7 }}>
      <Suspense fallback={null}>
        <Environment
          files="/Bridge02B_8k_Ref.hdr"
          ground={{ height: 40, radius: 130 }}
        />
        <spotLight angle={1} position={[-30, 200, -100]} intensity={1} />
        <Car position={[-18, 0, -22]} scale={20} rotation-y={-Math.PI / 4} />
        <ContactShadows
          renderOrder={2}
          frames={1}
          resolution={1024}
          scale={120}
          blur={5}
          opacity={1.0}
          far={100}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <PerspectiveCamera makeDefault position={[-10, 100, 120]} fov={35} />
    </Canvas>
  );
}
