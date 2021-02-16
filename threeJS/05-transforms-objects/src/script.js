import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

/*
 * We can put objects inside groups and use position, rotation (or quaternion) and scale on those groups. 
 * Overall it is better creating groups of objects so it would be better to modify the whole group and not each part of the object each time we would like to make a change. 
 * For example if we want to move our cube below, we'll have to change accordingly every part that consists of the cube or we can simply group all the parts and just move the whole group.
 * And overall that's best practice.  
 */

 const group = new THREE.Group();
 group.position.y = 1;
 group.scale.y = 2;
 group.rotation.y = 1;
 scene.add(group);

 const cube1 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1), // we can directly instatiate the geometry and material inside the mesh
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 );
 group.add(cube1); // and now we add the cube to te group and the group to the scene and we have the same results as before.

 const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);



// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// we can move the mesh in the 3D space.
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// or we can do it in 1 function:
// mesh.position.set(0.7, -0.6, 1);
// scene.add(mesh);

//console.log(mesh.position.length()); // we can get the length of the mesh. (the mesh in our case is the cube we created in the above steps.)
//mesh.position.normalize(); // this one reduces the length of our vector (our position is a vector3 which has x,y,z properties and many more) to 1. 

// we can also scale our mesh
// scale property is also a vector3 as the position property is and we can use it to scale our mesh (cube in this case)
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

// or do it in 1 line again:
// mesh.scale.set(2, 0.5, 0.5);

// ROTATE OBJECTS

// Rotation property 

/*
 * the rotation property also has x,y and z properties but it's not a vector3 it's an Euler (more on three.js documentation)
 * when we change the x,y,z properties of rotation we can imagine putting a stick through our object's center in the axis's direction and then rotating that object on that stick. 
 */

 //mesh.rotation.y = 0.5; // this will rotate our cube a bit. 
 //mesh.rotation.y = Math.PI; // this is 3.14159... will rotate our object 180 degrees. and 2 times PI will rotate our object 360 degrees... basic trigonometry.

 // Quaternion property for rotating objects. 

 /*
  * Quaternion also expresses a rotation, 
  * but in a more mathematical way. 
  * More information about it on three.js documentation.
  * A point ot remember is that when we change quaternion coordinates, then rotation coordinates are changed automatically behind the scenes and vice versa in three.js. 
  */

// axes helper
// we can modify the length of the axes in the parameter.
const axesHelper = new THREE.AxesHelper(2);

// the axes helper is an object as well so it should be added to the scene.
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 2;
scene.add(camera);

//console.log(mesh.position.distanceTo(camera.position)); // we can get the distance of the mesh from the camera.

/*
 * Object 3D instances have a lookAt() method which rotates the object so that its -z faces the target you provided. 
 * The target must be a Vector3 (aka: x,y,z coordinates) 
 */

 //camera.lookAt(mesh.position); // remember that .position is a Vector3 property and so we're telling the camera to look exactly at the position of our mesh.

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);