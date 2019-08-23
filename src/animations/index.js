/**
 * @param {function[]} ...anims
 */
export function animationSingleton(...anims) {
  anims.map(func => func())
}
