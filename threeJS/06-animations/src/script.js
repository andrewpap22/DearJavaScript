import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// Time 
// let time = Date.now();

// // Or we can do the same thing we did with time with a built-in three.js clock function

// // first we need to get the clock object:
// const clock = new THREE.Clock();

/* We're going to create now a tween animation using the gsap library */

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 }); // this one will move the cube to the right of the units specified on the x variable. with a duration of 1 second and with a starting delay of 1 second
gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 }); // and now this will move it all the way to the left side.

// Animations 
const tick = () => 
{
//     // Current Time
//     const currentTime = Date.now();

//     const deltaTime = currentTime - time;
//     time = currentTime;

//     // instead of calculating manually the delta time, we can get the elapsed time but the clock object.
//     const elapsedTime = clock.getElapsedTime();
    
//     // Update Objects
//     mesh.rotation.x += 0.001 * deltaTime;
//     mesh.rotation.y += 0.001 * deltaTime;

//     // and now we can update our new cube as we did before but using the clock object.
//     // also by using the sin, cos trigonometry function the way we're doing it below,
//     // we can get our cube do a circle and we can see that animation.
//     mesh2.position.y = Math.sin(elapsedTime);
//     mesh2.position.x = Math.cos(elapsedTime);

//     // Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(tick);
};

tick();