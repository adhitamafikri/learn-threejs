import {
  translatex,
  translatey
} from 'animations/translation'

/**
 * @param {THREE.Mesh} mesh 
 * @param {THREE.Mesh} keyCOde
 */
export function walk(mesh, keyCode) {
  if (keyCode == 37) translatex(mesh, '-')
  else if (keyCode == 39) translatex(mesh)
  else if (keyCode == 38) translatey(mesh)
  else if (keyCode == 40) translatey(mesh, '-')
}
