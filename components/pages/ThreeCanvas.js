import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Plane } from "@react-three/drei";

function BgStars({ color }) {
  return (
    <Sparkles
      count={500}
      speed={1}
      opacity={0.7}
      color={color}
      size={10}
      scale={[100, 100, 10]}
      noise={[3, 3, 3]}
      position={[0, 0, -10]}
    />
  );
}

function PlaneMesh() {
  return (
    <Plane
      position={[0, 0, 0]}
      rotation={[Math.PI / 4, 0, 0]}
      args={[100, 100, 1, 1]}
    >
      <meshBasicMaterial color="#4F22F2" />
    </Plane>
  );
}

export default function ThreeCanvas() {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <BgStars color={"#4F22F2"} />
        <BgStars color={"#00E5B9"} />
      </Canvas>
    </Suspense>
  );
}
