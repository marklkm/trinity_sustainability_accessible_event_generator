// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera position
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Create a simple tree model
function createTree(x, z) {
  const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1);
  const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.set(x, 0.5, z);
  scene.add(trunk);

  const foliageGeometry = new THREE.ConeGeometry(1, 2, 8);
  const foliageMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
  foliage.position.set(x, 2, z);
  scene.add(foliage);
}

// Add trees to the scene
createTree(0, 0);
createTree(2, 2);
createTree(-2, -2);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
