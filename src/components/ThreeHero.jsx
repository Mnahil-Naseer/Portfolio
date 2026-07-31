import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    // Near-black background.
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 1.6, 4.5);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Barely-there ambient — most of the earlier "brightness" was
    // ambient light flatly lifting every surface, orb included.
    const ambient = new THREE.AmbientLight(0xffffff, 0.05); // was 0.15

    scene.add(ambient);

    // Key light cut way down — this alone was doing most of the work
    // making the orb look glowy/lit-up rather than dark and moody.
    const keyLight = new THREE.PointLight(0x061c3d, 0.3, 15); // was 0x083a7a @ 0.65
    keyLight.position.set(2.5, 2, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x1a1f26, 0.12, 16); // was 0x5b6472 @ 0.3
    fillLight.position.set(-2.5, 1.5, 2.5);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.04, 20); // was 0.1
    rimLight.position.set(0, -2, 4);
    scene.add(rimLight);

    const group = new THREE.Group();
    scene.add(group);

    const orbGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const orbMaterial = new THREE.MeshPhysicalMaterial({
      // Near-black navy — the color itself was still fairly saturated before.
      color: 0x02060f,
      roughness: 0.55,          // was 0.32 — much less specular highlight
      metalness: 0.25,          // was 0.4
      transmission: 0.18,       // was 0.4 — far less glassy glow-through
      thickness: 1.6,
      clearcoat: 0.05,          // was 0.15
      clearcoatRoughness: 0.4,  // was 0.25
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orb);

    const ringGeometry = new THREE.TorusGeometry(1.8, 0.06, 24, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a1f3d, // darker than before
      transparent: true,
      opacity: 0.1,    // was 0.18
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const accentGeometry = new THREE.TorusGeometry(2.4, 0.02, 12, 120);
    const accentMaterial = new THREE.MeshBasicMaterial({
      color: 0x30363f, // darker grey than before
      transparent: true,
      opacity: 0.08,   // was 0.12
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
      color: 0x4b5563, // dimmer, darker grey instead of slate-300
      size: 0.04,
      transparent: true,
      opacity: 0.3,    // was 0.45
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