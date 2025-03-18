
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RocketIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearAlpha(0);

    // Create NFT card geometries with different colors for different rarities
    const createNFTCard = (position: THREE.Vector3, color: string) => {
      const geometry = new THREE.BoxGeometry(1, 1.4, 0.1);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color),
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });

      const card = new THREE.Mesh(geometry, material);
      card.position.copy(position);
      return card;
    };

    // Add cards with different rarity colors
    const cards = [
      createNFTCard(new THREE.Vector3(-2, 1, 0), "#8B5CF6"), // Common (Purple)
      createNFTCard(new THREE.Vector3(2, -1, 0), "#60A5FA"), // Platinum (Blue)
      createNFTCard(new THREE.Vector3(0, 0, 0), "#F59E0B"), // Gold (Yellow)
    ];

    cards.forEach(card => scene.add(card));

    // Enhanced lighting for better visual effect
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Animate each card differently
      cards.forEach((card, index) => {
        card.rotation.x += 0.003 * (index + 1);
        card.rotation.y += 0.005 * (index + 1);
        
        // Add floating animation
        card.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 30 }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-50" style={{ zIndex: 25 }} />
      
      <div className="container relative z-30 mx-auto text-center space-y-8 max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Complete Quests. Earn Unique NFTs.
            </span>
            <br />
            <span className="text-white">
              Upgrade & Trade.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Engage in exciting quests, collect exclusive NFTs, and level them up to unlock even rarer assets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Link to="/discover">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105"
            >
              Start Collecting NFTs
              <RocketIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/quests">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-purple-500/50 hover:border-purple-500 bg-transparent text-white px-8 py-6 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105"
            >
              Explore Live Quests
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-4 pt-12 flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium">Complete Quests</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium">Earn NFTs</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium">Upgrade Rarities</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium">Trade & Showcase</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
