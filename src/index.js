import 'styles/index.scss'

import { create as createScene } from 'scene'
import { create as createCube } from 'shapes/Cube'
import { create as createSphere } from 'shapes/Sphere'
import { create as createLine } from 'shapes/Line'

import { create as createPointLight } from 'lights/Point'

import { animationSingleton } from 'animations'
import { rotatex, rotatey } from 'animations/rotation'

function init() {
  const { scene, camera, renderer } = createScene()
  const cube = createCube()
  const line = createLine()
  const sphere = createSphere()

  const light = createPointLight()

  cube.position.set(15, 0, 0)
  light.position.set(10, 0, 25)

  scene.add(cube)
  scene.add(line)
  scene.add(sphere)
  scene.add(light)

  camera.position.set(0, 0, 25)
  camera.lookAt(0, 0, 0)

  const animationSet = [
    rotatex(cube),
    rotatey(cube),
    rotatex(sphere),
    rotatey(sphere),
  ]

  const render = () => {
    requestAnimationFrame(render)

    rotatex(cube)
    rotatey(cube)
    rotatex(sphere)
    rotatey(sphere)

    renderer.render(scene, camera)
  }
  render()
}

init()
