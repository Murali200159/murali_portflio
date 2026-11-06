import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting (Palette-tuned: Terracotta #C96F4F, Forest #24372F, Soft Cream #F8F6EE)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc96f4f, 2.2); // Terracotta accent light
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x24372f, 1.8); // Deep forest green key light
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x687f5b, 1.5, 10); // Sage fill light
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 3. Central 3D Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // A. Inner Faceted Crystal (AI Neural Core)
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x24372f,
      emissive: 0x17231e,
      roughness: 0.25,
      metalness: 0.6,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      wireframe: false,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // B. Terracotta Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.65, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xc96f4f,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // C. Orbiting Full-Stack Torus Rings
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x687f5b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.35, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xc96f4f,
      metalness: 0.7,
      roughness: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    coreGroup.add(ring2);

    // D. Orbiting Satellites (Data & Model nodes)
    const satellitesGroup = new THREE.Group();
    coreGroup.add(satellitesGroup);

    const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xc96f4f,
      emissive: 0xc96f4f,
      emissiveIntensity: 0.4,
    });

    const satCount = 6;
    const satDistance = 2.1;
    const satellites: THREE.Mesh[] = [];

    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const sat = new THREE.Mesh(satelliteGeo, satelliteMat);
      sat.position.set(Math.cos(angle) * satDistance, Math.sin(angle) * satDistance, 0);
      satellites.push(sat);
      satellitesGroup.add(sat);
    }

    // E. 3D Floating Particle Constellation
    const particleCount = 75;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x687f5b,
      size: 0.055,
      transparent: true,
      opacity: 0.65,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 4. Smooth Mouse Interaction (Inertia Damping)
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent): void => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 5. Visibility Observer (Pause when offscreen for max performance)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = (): void => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Continuous ambient rotation
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      cageMesh.rotation.y = -elapsedTime * 0.18;
      cageMesh.rotation.z = elapsedTime * 0.12;

      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.28;
      satellitesGroup.rotation.z = elapsedTime * 0.35;

      particleField.rotation.y = elapsedTime * 0.04;

      // Smooth mouse follow (LERP)
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;

      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.06;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = (): void => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-auto select-none ${className}`}
      aria-hidden="true"
    />
  );
};

