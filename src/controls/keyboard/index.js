// arrows [left, up, right, down]
const keyMaps = [37, 38, 39, 40]
let key = null

/**
 * @param {number} keyCode
 * @return {number | null} keyCode
 */
function setKeyCode(keyCode) {
  console.log(keyCode)
  keyMaps.includes(keyCode) ? key = keyCode : key = null
}

export function getKeyCode() {
  return key
}

function control() {
  console.log('running keyboardControls')
  window.addEventListener('keyup', e => setKeyCode(e.keyCode))
}

export function destroyKeyboardControls() {
  window.removeEventListener('keyup', () => console.log('keyboard controls are destroyed'))
}

control()
