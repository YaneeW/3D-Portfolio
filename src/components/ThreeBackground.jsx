import React, { useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".app");
    // const loader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    // สร้างวัตถุ Particles ที่เป็นวงกลมและขนาดเล็ก
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02, // ขนาดของจุด
      vertexColors: true, // เปิดใช้งานสีตามจุด
    });

    for (let i = 0; i < particleCount; i++) {
      // สุ่มพิกัด X, Y, Z ในวงกลม
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // สุ่มสีสำหรับแต่ละจุด
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return null;
};

export default ThreeBackground;
