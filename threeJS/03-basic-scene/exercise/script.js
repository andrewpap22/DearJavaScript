/* to start a scene in three.js you need 4 elements
 * 1. a scene that will contain objects
 * 2. some objects
 * 3. a camera
 * 4. a renderer 
 */

const scene = new THREE.Scene();

// what we want in this exercise is to create a simple red cube. 

// To achieve our goal above first of all we need to create a Mesh. 

// A Mesh is a combination of a geometry (the shape) and a material (how it looks) 

const geometry = new THREE.BoxGeometry(1, 1, 1); // the 1's can be meters, cmeters, or kmeters, etc...

const material = new THREE.MeshBasicMaterial({
  color: 'red'
});

// And now we have to instatiate the Mesh with the geometry and the material. 

const mesh = new THREE.Mesh(geometry, material);

// And finally we have to add the Mesh to the scene. 

scene.add(mesh);

// sizes for the second parameter of the camera. 
// Basically it's the size of the render for our viewport (the webpage content basically) that we will create later on.

const sizes = {
  width: 800,
  height: 600
};

let aspectRatio = (sizes.width / sizes.height);

const camera = new THREE.PerspectiveCamera(75, aspectRatio); 

// the 75 parameters is the field of view and it's a degrees angle.
// and the second parameter is called an aspect ratio. (the width of the render divided by the height of the render.)

scene.add(camera); // we also need to add the camera to the scene.

// And finally the renderer. 

/*
 * The renderer basically says, render the scene from the camera point of view. And that's it. 
 * The result will be drawn into a canvas. 
 * A canvas is a HTML element in which you can draw stuff.
 * Three.js will use WebGL to draw the render inside this canvas.
 * We can create it or we can let Three.js do it. 
 */

// selecting the canvas element from our HTML file.
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  //canvas: canvas
  // a little trick here: if the property name is the same as the variable name then we can simply leave it as: 
  canvas
});

// we need to update the size of the renderer. 
renderer.setSize(sizes.width, sizes.height);

// and now we're all set up and we can just make our render. 

camera.position.z = 3; // check below why we do this here.
camera.position.x = 2; // this is to move the camera again to the left to the that it is a cube and not a square (check details below.)

renderer.render(scene, camera);

/* At this point we can't see our cube because our camera is inside the cube, 
 * So we need to move our camera backwards in order to see the cube finally.
 * In general to transform an object, we can use the following properties: 
 * 1. position
 * 2. rotation
 * 3. scale
 * 
 * Now, the position property is also an object with x,y,z properties. 
 * In three.js it's default that the forward/backward will be the z axis, up/down will be the y axis and left / right will be the x axis.
 * For our case, to move the camera backwards we want to increase the value of the z axis. (So a positive z axis is a move towards us (meaning we move an object backwards) and a negative value is moving the object away from us.) 
 * So finally we need to move the camera backwards BEFORE doing the render.
 */

