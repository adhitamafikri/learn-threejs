import {
  BoxGeometry,
  MeshLambertMaterial,
  Mesh
} from "three"

/**
 * @return {Three.Mesh} cube
 */
export function create() {
  let geometry = new BoxGeometry(10, 5, 5)
  let material = new MeshLambertMaterial({ color: '#6A1B9A' })
  let cube = new Mesh(geometry, material)

  return cube
}
