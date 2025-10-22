import { useEffect, useRef } from "react";
import * as THREE from "three";

type RenderFn = (
  scene: THREE.Scene,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  mixers: any[]
) => void;

export const useThreejs = (render: RenderFn) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const mixers: any[] = [];
  const clock = new THREE.Clock();

  useEffect(() => {
    if (!mountRef.current) return;

    // === Основная инициализация ===
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      20
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // === Свет ===
    const lightAbove = new THREE.PointLight(0xffffff, 15, 300);
    lightAbove.position.set(0, 1.5, -1);
    scene.add(lightAbove);
    const lightLeft = new THREE.PointLight(0xffaf6b, 10, 300);
    lightLeft.position.set(-2, 1, 0);
    scene.add(lightLeft);
    const lightFront = new THREE.PointLight(0xffffff, 5, 300);
    lightFront.position.set(0, -1, 2);
    scene.add(lightFront);
    const lightRight = new THREE.PointLight(0xffffff, 3, 500);
    lightRight.position.set(2, 0, 0);
    scene.add(lightRight);

    render(scene, camera, renderer, mixers);

    // === Анимация ===
    const animate = () => {
      const delta = clock.getDelta();

      mixers.forEach((mixer) => {
        mixer.update(delta);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // === Обработка изменения размера ===
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // Используем ResizeObserver для точного отслеживания размеров родителя
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    // === Очистка при размонтировании ===
    return () => {
      resizeObserver.disconnect();
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return mountRef;
};
