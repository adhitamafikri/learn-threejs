import 'styles/index.scss'

import { create as createScene } from "services/scene"
import { create as createCube } from "services/shapes/Cube"
import { create as createSphere } from "services/shapes/Sphere"
import { create as createLine } from "services/shapes/Line"

import { create as createPointLight } from "services/lights/Point"

function init() {
  const { scene, camera, renderer } = createScene()
  const cube = createCube()
  const line = createLine()
  const sphere = createSphere()

  const light = createPointLight()

  cube.position.set(10, 0, 0)
  light.position.set(10, 0, 25)

  scene.add(cube)
  scene.add(line)
  scene.add(sphere)
  scene.add(light)

  camera.position.set(0, 0, 25)
  camera.lookAt(0, 0, 0)

  const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
  }
  render()
}

init()
