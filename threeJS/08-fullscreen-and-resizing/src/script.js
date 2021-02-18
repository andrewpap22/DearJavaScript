import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * fixing the viewport of the window when it's being resized.
 */
window.addEventListener('resize', () => {
    // Update sizes when window is being resized
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update the camera as well because when resizing the window the aspect ratio of the camera changes as well.
    camera.aspect = sizes.width / sizes.height;

    /**
     * when changing properties like aspect of the camera, we need to call camera.updateProjectionMatrix()
     */
    camera.updateProjectionMatrix();

    // We also need to update the sizes of the renderer
    renderer.setSize(sizes.width, sizes.height);

    // We also have to add this here, in case someone changes the browser window to another screen, for the same reasons as explained below.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Now we will add support to full screen mode by double clicking anywhere on the screen.
 * We can change the double click macro for whatever else.
 */
window.addEventListener('dblclick', () => {
    // console.log("double clicked.");

    if (!document.fullscreenElement)
    {
        // console.log("go full screen");
        canvas.requestFullscreen();
    }
    else
    {
        // console.log("leave full screen");
        document.exitFullscreen();
    }
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

/**
 * Updating our renderer according to the pixel ratio of our screen.
 * (for better displaying / rendering purposes)
 */
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // lowering devices with greater than 2 pixel ratio to simply 2, for better performance.

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
};

tick();