import { PointLight } from 'three'

/**
 * @return {THREE.PointLight} light
 */
export function create() {
  const light = new PointLight('#ffffff', 0.8, 500)

  return light
}
