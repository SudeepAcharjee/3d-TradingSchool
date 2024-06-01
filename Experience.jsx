import React, { useState, useEffect, Suspense } from "react";
import { Environment } from "@react-three/drei";

import { motion } from "framer-motion-3d";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Box, Center } from "@react-three/drei";
import { Cone, Icosahedron, Text } from "@react-three/drei";
import {
  Box3,
  Color,
  MathUtils,
  MeshPhysicalMaterial,
  Spherical,
  Vector3,
} from "three";
import { useMemo, useRef } from "react";

import { BackGroundModel_3 } from "./BackGroundModel_3";

import { CharacterModel_2 } from "./CharacterModel_2";
import FadeIn from "./FadeIn";

function Word({ children, ...props }) {
  const color = new Color();
  const fontProps = {
    font: "/Philosopher-Regular.ttf",
    fontSize: 0.1,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.lookAt(camera.position);
  });

  return (
    <Text
      ref={ref}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 15, wordsArray }) {
  const cloudRef = useRef();

  const words = useMemo(() => {
    const temp = [];
    const spherical = new Spherical();

    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          wordsArray[(i - 1) * count + j],
        ]);
    return temp;
  }, [count, radius, wordsArray]);

  useFrame((_, delta) => {
    // Make the entire cloud rotate
    cloudRef.current.rotation.y += 0.3 * delta;

    // Adjust the rotation speed as needed
  });

  return (
    <group ref={cloudRef} position={[0, -radius / 3, 0]}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}

export function Experience(props) {
  const { cameraRef, device } = props;
  const { viewport } = useThree();
  const { section } = props;
  const stockMarketWords = [
    "stock",
    "market",
    "trading",
    "investing",
    "portfolio",
    "equity",
    "shares",
    "dividend",
    "bullish",
    "bearish",
    "index",
    "exchange",
    "broker",
    "Futures",
    "Options",
    "blue chip",
    "volatility",
    "risk",
    "return",
    "fundamental",
    "technical analysis",
    "margin",
    "liquidity",
    "asset",
    "allocation",
    "capital",
    "price-to-earnings",
    "earnings per share",
    "market cap",
    "bid",
    "ask",
  ];
  const characterModelRef = useRef();
  const cloudsRef = useRef();

  // useFrame(() => {
  //   console.log(cameraRef.current.position)
  // })

  return (
    <>
      <group
        position={[device === "web" ? 0 : -1.2, device === "web" ? 0 : -0.5, 0]}
        scale={device === "web" ? [1, 1, 1] : [0.7, 0.7, 0.7]}
      >
        <Suspense fallback={"loading experience..."}>
          <BackGroundModel_3 section={section} />
        </Suspense>

        <motion.group
          //Floating Animation
          animate={String(section)}
          variants={{
            0: {
              y: 0,
              x: 0,
              z: 0,

              transition: { duration: 0.2, ease: "easeInOut" },
            },
            1: {
              y: 0.05,
              x: 0,
              z: 0,

              transition: {
                delay: 0.8,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
        >
          <motion.group
            animate={String(section)}
            variants={{
              0: {
                y: 0,
                x: 0,
                z: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                transition: { duration: 0.8 },
              },
              1: {
                y: device === "web" ? -2.7 : -viewport.height / 2.1,
                x: device === "web" ? 0.3 : 0.3,
                z: 0,
                scale: 1.2,
                rotateX: 0,
                rotateY: -1,
                rotateZ: 0,
                transition: { delay: 0.2, duration: 0.7 },
              },
            }}
            // position={[50, 0, 0]}
            ref={characterModelRef}
          >
            <Suspense fallback={"loading experience..."}>
              <CharacterModel_2
                animation={
                  section === 0 ? "Computer_Action" : "Falling_meditating_anim"
                }
              ></CharacterModel_2>
            </Suspense>
          </motion.group>
        </motion.group>
        {section === 0 ? null : (
          <group position={[-0.2, device === "web" ? -1.2 : 0.2, 0.1]}>
            <Cloud count={4} radius={1} wordsArray={stockMarketWords} />
          </group>
        )}

        <Environment files="hall.hdr"></Environment>
      </group>
    </>
  );
}
