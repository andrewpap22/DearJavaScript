import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
//const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);

/**
 * we can create our own geomtries instead of getting an already predefined one from the library.
 * First we need to create our own vertices.
 * And then we need to create a face for this vertices (points in 3d space) so we can display our geometry.
 */
//const geometry = new THREE.Geometry(); // empty geometry.

// const vertex1 = new THREE.Vector3(0, 0, 0); // center of the scene
// geometry.vertices.push(vertex1);

// const vertex2 = new THREE.Vector3(0, 1, 0);
// geometry.vertices.push(vertex2);

// const vertex3 = new THREE.Vector3(1, 0, 0);
// geometry.vertices.push(vertex3);

// /**
//  * The 0, 1, 2 parameters in the Face3 object below are the indices of the vertices array. 
//  * So in the 0th position we have our vertex1 and then vertex2 and so on...
//  */
// const face = new THREE.Face3(0, 1, 2);
// geometry.faces.push(face); // and after this we have our triangle.

/**
 * We can also create multiple random triangles using the code below:
 */
// for (let i = 0; i < 50; i++) // loop to create 50 triangles
// {
//     for (let j = 0; j < 3; j++) // each triangle is composed by 3 values (3 vertices)
//     {
//         geometry.vertices.push(new THREE.Vector3( // and here we create those 3 vertices on random positions and adding them directly to the vertices array.
//             (Math.random() - 0.5) * 4, // x
//             (Math.random() - 0.5) * 4, // y
//             (Math.random() - 0.5) * 4 // z
//         ));
//     }
//     // now we have to create one face using the above 3 vertices
//     const verticesIndex = i * 3; // this will get us a number of 0, 3, 6, 9, 12, 15,... why? because our vertices are going 3 by 3 in the inner for loop above.
//     geometry.faces.push(new THREE.Face3(
//         verticesIndex,
//         verticesIndex + 1,
//         verticesIndex + 2
//     ));
// }

/**
 * Most geometries have a buffered version. 
 * What are buffer geometries? 
 * They are better optimized and easier for the hardware to handle and we use them for better performance.
 * So whenever we have already built in buffer geometries we just use them! 
 */
//const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 2, 2, 2);

/**
 * Now, we're going to build our own buffered version geometries.
 * Before creating the buffered geometry we need to undestand how to store buffer geometry data.
 * We're going to use Float32Array.
 * It is a: 
 * 1. Typed array
 * 2. can only store floats
 * 3. it has fixed length
 * 4. It is easier to handle for the computer. 
 */

// one way of creating the float32array
// const positionsArray = new Float32Array(9);

// // first vertex
// positionsArray[0] = 0;
// positionsArray[1] = 0;
// positionsArray[2] = 0;

// // second vertex
// positionsArray[3] = 0;
// positionsArray[4] = 1;
// positionsArray[5] = 0;

// // third vertex
// positionsArray[6] = 1;
// positionsArray[7] = 0;
// positionsArray[8] = 0;

// and a better way to do it
// const positionsArray = new Float32Array([
//     0, 0, 0, // first vertex
//     0, 1, 0, // second vertex
//     1, 0, 0 // third vertex
// ]);

// // then we have to convert that array to a buffer attribute
// // the 3 parameter here means that it has to 'read' the indices of the array 3 by 3, because each vertex has 3 elements (x,y,z)
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

// // and now we are going to create our geometry and add this buffer attribute to our buffer geometry.
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', positionsAttribute);

/**
 * Now we're going to create a bunch of triangles again.
 */
const geometry = new THREE.BufferGeometry();

const count = 50; // deciding on how many triangles we want

// why are we multiplying with 3, two times?
/**
 * we have 50 triangles (count variable)
 * and each triangle is being composed of 3 vertices
 * and each vertex will be composed of 3 values (x,y,z)
 */
const positionsArray = new Float32Array(count * 3 * 3);

// now we need to fill that array with random values. 
for (let i = 0; i < count * 3 * 3; i++)
{
    positionsArray[i] = (Math.random() - 0.5) * 4;
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute('position', positionsAttribute);

/**
 * NOTE!
 * Some geometries have faces that share common vertices.
 * When creating a BufferGeometry we can specify a bunch of vertices and then the indices to create the faces
 * and re-use vertices multiple times.
 * This one simply sends less data to the GPU to handle and simply improves overall performance. 
 * (NOT COVERED HERE) (more info on index bufferAttribute on three.js documentation)  
 */


const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000, 
    wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();