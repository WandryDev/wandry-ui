"use client";
import * as THREE from "three";

import { useThreejs } from "./useThreejs";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const getArmature = (scene: any) => {
  const armature = scene.getObjectByName("Armature");
  armature.scale.x = 0.3;

  armature.traverse(function (child: any) {
    if (child instanceof THREE.Mesh) {
      child.material.transparent = true;

      if (child.name === "character_Planemesh003") {
        //body
        child.material.roughness = 0.48;
      }
      if (child.name === "character_Planemesh003_1") {
        //eyes
        child.material.roughness = 0.4;
      }
    }
  });

  return armature;
};

const applyAnimations = (model: any, animation: any, mixers: any[]) => {
  const mixer = new THREE.AnimationMixer(model);
  mixer.clipAction(animation).setDuration(1).play();
  mixers.push(mixer);
};

const setArmaturePosition = (armature: any) => {
  armature.position.y = 0;
  armature.position.x = 0;
  armature.position.z = -3.5;

  armature.rotation.z = -0.5;
};

export const ThreeScene = () => {
  const mountRef = useThreejs((scene, camera, renderer, mixers) => {
    const loader = new GLTFLoader();
    loader.load(
      "/model.glb", // путь к файлу в public
      (gltf) => {
        const model = getArmature(gltf.scene);

        model.scale.set(1, 1, 1); // при необходимости изменить масштаб
        scene.add(model);

        setArmaturePosition(model);
        applyAnimations(model, gltf.animations[0], mixers); // Предполагается, что анимация находится в gltf.animations[0]
      }
    );
  });

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        marginTop: "-4vh",
      }}
    />
  );
};
