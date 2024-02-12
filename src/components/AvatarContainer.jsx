import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

const AvatarContainer = () => {
  return (
    <Canvas
      style={{ cursor: "grab" }}
      shadows
      camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default AvatarContainer;
