import 'styles/index.css'
import KeyboardControl from 'controls/config/keyboard'

import RedBall from 'instances/characters/RedBall'

import {
  create as createScene
} from 'scene'

import {
  create as createPointLight
} from 'lights/Point'

function init() {
  const {
    scene,
    camera,
    renderer
  } = createScene()

  // Enable keyboard control
  const KBControl = new KeyboardControl()
  KBControl.init()

  // Instantiating character
  const iRedBall = new RedBall()
  const playerRedBall = iRedBall.instantiate()
  playerRedBall.position.set(0, 0, 0)
  scene.add(playerRedBall)

  const light = createPointLight()
  light.position.set(10, 0, 25)
  scene.add(light)

  camera.position.set(0, 0, 25)
  camera.lookAt(0, 0, 0)

  const render = () => {
    requestAnimationFrame(render)

    iRedBall.control(KBControl.getKeyCode())

    renderer.render(scene, camera)
  }
  render()
}

init()
