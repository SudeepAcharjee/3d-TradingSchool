import styles from "./app.module.css";
import { Experience } from "./Components/Experience";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Interface } from "./Components/Interface";
import { SimpleCameraRig } from "./Components/SimpleCameraRig";
import HandleResize from "./Components/HandleResize";

import {
  OrbitControls,
  ScrollControls,
  Scroll,
  PerspectiveCamera,
} from "@react-three/drei";
import { ScrollManager } from "./Components/ScrollManager";
import { MotionConfig, spring } from "framer-motion";

export default function App() {
  const [section, setSection] = useState(0);

  const skillsPageBackgroundRef = useRef();

  const [scrollOffset, setScrollOffset] = useState(0);

  const [scrollData, setScrollData] = useState(0);

  const [device, setDevice] = useState("web");
  // const [backVideoX, setBackVideoX] = useState(0);
  const cameraRef = useRef();

  const isWideScreen = window.innerWidth > 2000;
  const pages = isWideScreen
    ? device === "web"
      ? 4.6
      : 5.1
    : device === "web"
      ? 5.6
      : 5.1;

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  let x;

  useEffect(() => {
    if (scrollData) {
      x = mapNumRange(
        scrollOffset,
        0,
        1 / (scrollData.pages - 1),
        0,
        scrollData.el.clientHeight,
      );
      // console.log(scrollData.offset)
    }
    const landingPage = skillsPageBackgroundRef.current;
    landingPage.style.transform = `translateY(-${x}px)`;
  }, [scrollOffset, scrollData, skillsPageBackgroundRef]);

  return (
    <main className={`${styles.main} ${device}`}>
      <div className={styles.skillsPage} ref={skillsPageBackgroundRef}>
        <video
          className="back-video"
          autoPlay
          muted
          loop
          style={{
            width: device === "web" ? "100%" : "auto",
            height: "100%",
            // transform:`translateX(${backVideoX}px)`
          }}
        >
          {/* <source src="/bACKGROUND.mp4" type="video/mp4"/> */}
          {/* stock-market-2023-11-27-05-36-31-utc_compressed */}
        </video>
      </div>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[3.2, 2.7, 4.5]} // Set the position of the camera
            fov={25} // Field of view
            near={0.1}
            far={1000}
            ref={cameraRef}
          />
          <HandleResize cameraRef={cameraRef} setDevice={setDevice} />

          {/* <OrbitControls enableZoom={false} /> */}

          <SimpleCameraRig></SimpleCameraRig>

          <ScrollControls pages={pages} damping={0.5} maxSpeed={1}>
            <ScrollManager
              section={section}
              onSectionChange={setSection}
              setScrollOffset={setScrollOffset}
              setScrollData={setScrollData}
            />
            <Scroll>
               <Experience
                  device={device}
                  section={section}
                  cameraRef={cameraRef}
                />
            </Scroll>
            <Scroll html>
              <Interface device={device} section={section} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
    </main>
  );
}
