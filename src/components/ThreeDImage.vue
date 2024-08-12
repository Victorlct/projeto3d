<template>
  <div ref="threeContainer" @mousedown="startRotation" @mouseup="stopRotation" @mousemove="onMouseMove"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'ThreeDImage',
  data() {
    return {
      isRotating: false,
      mouseX: 0,
      mouseY: 0,
      prevMouseX: 0,
      prevMouseY: 0,
      rotationSpeed: 0.01,
      naturalRotationY: 0.005,
      rotationX: 0,
      rotationY: 0,
    };
  },
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      // Cena
      const scene = new THREE.Scene();

      // Câmera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth / 2.2, window.innerHeight / 1.5);

      renderer.setClearColor(0xffffff, 0);

      this.$refs.threeContainer.appendChild(renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('jscircle.png', (texture) => {
        const geometry = new THREE.PlaneGeometry(6, 6, 32, 32);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide
        });
        this.plane = new THREE.Mesh(geometry, material);
        scene.add(this.plane);

        const animate = () => {
          requestAnimationFrame(animate);

          this.plane.rotation.y += this.naturalRotationY;

          if (this.isRotating) {
            const deltaX = (this.mouseX - this.prevMouseX) * 0.005;
            const deltaY = (this.mouseY - this.prevMouseY) * 0.005;

            this.rotationX += deltaY;
            this.rotationY += deltaX;

            this.plane.rotation.x = this.rotationX;
            this.plane.rotation.y = this.rotationY;
          }

          renderer.render(scene, camera);
          this.prevMouseX = this.mouseX;
          this.prevMouseY = this.mouseY;
        };

        animate();
      });

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 2.2, window.innerHeight / 1.5);
      });
    },
    startRotation(event) {
      this.isRotating = true;
      this.prevMouseX = event.clientX;
      this.prevMouseY = event.clientY;
    },
    stopRotation() {
      this.isRotating = false;
    },
    onMouseMove(event) {
      if (this.isRotating) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    }
  }
}
</script>
