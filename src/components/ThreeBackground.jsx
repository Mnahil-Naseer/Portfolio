import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // subtle fog and ambient color
    scene.fog = new THREE.FogExp2(0x020617, 0.12);

    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    const pointsCount = 150;
    const positions = new Float32Array(pointsCount * 3);
    const speeds = new Float32Array(pointsCount);

    for (let i = 0; i < pointsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
      speeds[i] = 0.002 + Math.random() * 0.006;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.06,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    // mouse interaction
    const mouse = new THREE.Vector2(0, 0);
    const mouse3 = new THREE.Vector3();

    function onPointer(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }

    container.addEventListener("pointermove", onPointer);

    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();
      const pos = geom.getAttribute("position");
      for (let i = 0; i < pointsCount; i++) {
        const ix = i * 3;
        const vy = speeds[i];
        pos.array[ix + 1] += Math.sin(t * 0.6 + i) * vy * 0.5;
        pos.array[ix] += Math.cos(t * 0.4 + i) * vy * 0.3;

        // push away from mouse
        mouse3.set(mouse.x * 6, mouse.y * 3, 0);
        const dx = pos.array[ix] - mouse3.x;
        const dy = pos.array[ix + 1] - mouse3.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 0.6) {
          const push = 0.02 / (dist2 + 0.02);
          pos.array[ix] += (dx / Math.sqrt(dist2 + 1e-6)) * push;
          pos.array[ix + 1] += (dy / Math.sqrt(dist2 + 1e-6)) * push;
        }

        // wrap
        if (pos.array[ix] > 6) pos.array[ix] = -6;
        if (pos.array[ix] < -6) pos.array[ix] = 6;
        if (pos.array[ix + 1] > 4) pos.array[ix + 1] = -4;
        if (pos.array[ix + 1] < -4) pos.array[ix + 1] = 4;
      }
      pos.needsUpdate = true;

      points.rotation.z += 0.0008;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    let animationId = requestAnimationFrame(animate);

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      geom.dispose();
      mat.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className={`absolute inset-0 pointer-events-none -z-10 ${className}`} />;
}
