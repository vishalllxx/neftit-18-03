
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const RotatingCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(240, 240);
    
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2, 6, 6, 6);
    const material = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color('#475569'),
      opacity: 0.9,
      transparent: true,
      shininess: 100,
      specular: new THREE.Color('#8B5CF6'),
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const mainLight = new THREE.DirectionalLight(0x8B5CF6, 1);
    mainLight.position.set(1, 1, 1);
    scene.add(mainLight);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 0.5);
    pointLight.position.set(-2, 1, -1);
    scene.add(pointLight);

    camera.position.z = 2.5;

    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.x = mouseX * 0.1;
      cube.position.y = mouseY * 0.1;
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
