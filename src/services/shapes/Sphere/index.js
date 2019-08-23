import {
  SphereGeometry,
  MeshLambertMaterial,
  Mesh
} from 'three'

/**
 * @return {Three.Mesh} sphere
 */
export function create() {
  const geometry = new SphereGeometry(5, 15, 15)
  const material = new MeshLambertMaterial({ color: '#EC407A' })
  const sphere = new Mesh(geometry, material)

  return sphere
}
