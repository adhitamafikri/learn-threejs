/**
 * @param {Three.Mesh} shape
 */
export function translatex(shape, direction = '+') {
  if (direction == '+' ) shape.position.x += 0.03
  else shape.position.x -= 0.03
}

/**
 * @param {Three.Mesh} shape
 */
export function translatey(shape, direction = '+') {
  if (direction == '+' ) shape.position.y += 0.03
  else shape.position.y -= 0.03
}

/**
 * @param {Three.Mesh} shape
 */
export function translatez(shape, direction = '+') {
  if (direction == '+' ) shape.position.z += 0.03
  else shape.position.z -= 0.03
}
