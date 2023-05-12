import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

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
