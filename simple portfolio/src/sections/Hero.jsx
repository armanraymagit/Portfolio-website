import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Text } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// 🔥 Laptop model with screen text attached
const LaptopModel = () => {
  const group = useRef();
  const textGroup = useRef();

  const { scene } = useGLTF("/models/laptop4.glb");


  // Animate the laptop lid opening
  useGSAP(() => {
    // You might need to change "Top" to the actual name of your laptop's lid mesh in your 3D model.
    const lid = scene.getObjectByName("Screen");

    if (lid) {
      gsap.fromTo(
        lid.rotation,
        {
          x : -1.65, 
        },
        {
          x: -3.3, // Open to about -97 degrees
          duration: 3,
          ease: "power2.inOut",
        }
      );
    }
  }, [scene]);

  useEffect(() => {
    const screen = scene.getObjectByName("Screen");
      
    if (screen && textGroup.current) {
      screen.add(textGroup.current);
      textGroup.current.position.set(0, 0.1, -0); 
     
    }
  }, [scene]);


  return (
    <group ref={group} scale={0.11} position={[0, -1, 0]}>
      <primitive object={scene} />

      {/* Laptop screen text */}
      <group ref={textGroup}>
       <Text
          fontSize={0.015}
          color="#00eaff"
          anchorX="center"
          anchorY="middle"
            rotation-y={Math.PI} // 
          // Rotate text 180 degrees
        >Welcome to My Portfolio! 
        
        </Text>
      </group>
    </group>
  );
};

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1, .hero-text h2",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen
        bg-white dark:bg-black
        flex
      "
    >
      {/* ⭐ HERO TEXT */}
      <div className="w-[20%] h-full flex flex-col items-end justify-center px-5 hero-text">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
          HELLO
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-400 mt-2">
          
        </h2>
      </div>
      {/* 🖥️ 3D Laptop */}
      <div className="w-[70%] h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <LaptopModel />
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
