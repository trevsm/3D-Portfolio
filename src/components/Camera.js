import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export function CustomCamera() {
  const { camera } = useThree();

  const setDefaultView = () => {
    camera.fov = 23;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };

  useEffect(() => {
    setDefaultView();
  }, []);
  return null;
}
