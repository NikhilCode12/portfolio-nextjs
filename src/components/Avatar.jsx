"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";

export function Avatar(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("models/nikhil_avatar.glb");
  const { animations: dancing } = useFBX("animations/Dancing.fbx");
  dancing[0].name = "Dancing";
  const { actions } = useAnimations(dancing, groupRef);

  useEffect(() => {
    actions["Dancing"].reset().play();
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Headwear.geometry}
        material={materials.Wolf3D_Headwear}
        skeleton={nodes.Wolf3D_Headwear.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Top"
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Bottom"
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Outfit_Footwear"
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        morphTargetDictionary={
          nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
        }
        morphTargetInfluences={
          nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Body"
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("models/nikhil_avatar.glb");
