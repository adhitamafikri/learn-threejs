import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer
} from "three"

/**
 * @return {scene, camera, renderer}
 */
export function create() {
  const scene = new Scene()
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)

  const renderer = new WebGLRenderer( { antialias: true })
  renderer.setClearColor('#212121')
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix()
  })

  return {
    scene,
    camera,
    renderer
  }
}
