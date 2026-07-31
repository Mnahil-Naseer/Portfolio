import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00022a);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 1.6, 4.5);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0x0654b0, 1.2, 15);
    keyLight.position.set(2.5, 2, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x9598a1, 0.65, 16);
    fillLight.position.set(-2.5, 1.5, 2.5);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.2, 20);
    rimLight.position.set(0, -2, 4);
    scene.add(rimLight);

    const group = new THREE.Group();
    scene.add(group);

    const orbGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const orbMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0654b0,
      roughness: 0.18,
      metalness: 0.55,
      transmission: 0.6,
      thickness: 1.6,
      clearcoat: 0.35,
      clearcoatRoughness: 0.12,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orb);

    const ringGeometry = new THREE.TorusGeometry(1.8, 0.06, 24, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0654b0,
      transparent: true,
      opacity: 0.28,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const accentGeometry = new THREE.TorusGeometry(2.4, 0.02, 12, 120);
    const accentMaterial = new THREE.MeshBasicMaterial({
      color: 0x9598a1,
      transparent: true,
      opacity: 0.18,
    });
    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.rotation.x = Math.PI / 2;
    accent.rotation.z = Math.PI / 6;
    group.add(accent);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.3 + Math.random() * 0.5;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xe2e8f0,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    let animationFrameId;
    const animate = () => {
      orb.rotation.y += 0.0035;
      ring.rotation.z += 0.0025;
      accent.rotation.z -= 0.002;
      particles.rotation.y += 0.0008;
      group.rotation.y += 0.0012;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      particleGeometry.dispose();
      particleMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-[2rem] bg-base-950"
      style={{ minHeight: 520 }}
    />
  );
}
