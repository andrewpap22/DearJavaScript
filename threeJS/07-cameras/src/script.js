import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // this one can't be imported directly from the THREE variable, so we got to import it this way. 

// and then to use it we don't have to do THREE.OrbitControls but simply do:
//console.log(OrbitControls);

/**
 * We want to get the coordinates of the mouse in this part,
 * so we can move the camera later on according to the movement of the mouse.
 */
const cursor = {
    x: 0,
    y: 0
};
window.addEventListener('mousemove', (event) => 
{
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;

    //console.log(cursor.y);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);

/* So, another type of camera we do have is the OrthographicCamera, 
 * This camera differs from the perspectiveCamera in the sense that objects will have the same size, 
 * regardless of their distance to the camera.
 * We also want to calculate the aspect ratio to provide it to the parameters of the orthographic camera,
 * so that we get a better render overall. (more info on that on lesson no. 7 of the course)
 */

//const aspectRatio = (sizes.width / sizes.height);
//const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100); // more information for the parameters on three.js documentation.

//camera.position.x = 2;
//camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// Controls
/**
 * we need to provide 2 parameters to the OrbitControls class. 
 * 1. The camera that has to be modified by the OrbitControls and
 * 2. A DOM element from our webpage that will serve as a reference to put the mouse events on it.
 * Like moving the mouse, clicking the mouse, tapping on a touch screen, etc...
 * So for that purpose we're going to pass our canvas which is where we render everything.
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // enables a more smooth movement of the camera.

/**
 * By default the camera when used with orbit controls is looking at the center of the scene.
 * We can change the target property which is a Vector3 like this:
 */
//controls.target.y = 1;
//controls.update(); // and we have to call update() for the changes to take effect.

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    //mesh.rotation.y = elapsedTime;

    // Update camera based on cursor coordinates.
    //camera.position.x = cursor.x * 10;
    //camera.position.y = - (cursor.y * 10); // making this negative because we want to make the y axis have negative values downside and positive values upwards. 

    /**
     * Now we wanna move the camera around the center of the scene (around the cube)
     * To do this we're going to use trigonometry.
     */

    // camera.position.x = Math.sin(cursor.x * (Math.PI * 2)) * 3;
    // camera.position.z = Math.cos(cursor.x * (Math.PI * 2)) * 3;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position);

    /**
     * Three.js has built in controls which allow us to do the same thing as we did above with the 360 camera move and many many more. 
     * https://threejs.org/docs/index.html#examples/en/controls/DeviceOrientationControls
     */

    // ask the camera to look directly at the cube when not moving the cursor, so we simply get back to the 'center'
    //camera.lookAt(mesh.position);

    // Update Controls
    controls.update(); // this one is needed ONLY! if we have the enableDamping = true.

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();