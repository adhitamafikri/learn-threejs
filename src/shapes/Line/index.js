import {
  LineBasicMaterial,
  Geometry,
  Vector3,
  Line
} from 'three'

/**
 * @return {THREE.Line} line
 */
export function create() {
  const material = new LineBasicMaterial({ color: 0x0000ff })
  let geometry = new Geometry()
  geometry.vertices.push(new Vector3(-10, 0, 0))
  geometry.vertices.push(new Vector3(0, 10, 0))
  geometry.vertices.push(new Vector3(10, 0, 0))

  const line = new Line(geometry, material)

  return line
}
