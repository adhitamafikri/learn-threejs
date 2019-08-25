/**
 * @return {Object} init(), destroy(), getKeyCode()
 */
function KeyboardControl() {
  console.log('instantiating keyboard controls')
  // arrows [left, up, right, down]
  this._arrowKeysMap = [37, 38, 39, 40]

  // WASD
  this._wasdKeysMap = [65, 87, 68, 83]

  this._keyCode = null
}

KeyboardControl.prototype = {
  setKeyCode: function (keyCode) {
    if (this._arrowKeysMap.includes(keyCode)) this.keyCode = keyCode
    else if (this._wasdKeysMap.includes(keyCode)) this.keyCode = keyCode
    else this.keyCode = null
  },

  getKeyCode: function () {
    return this.keyCode
  },

  init: function () {
    console.log('initializing keyboardControls')
    window.addEventListener('keyup', () => this.setKeyCode(null))
    window.addEventListener('keydown', e => this.setKeyCode(e.keyCode))
  },

  destroy: function () {
    window.removeEventListener('keyup', () => console.log('keyboard controls are destroyed'))
    window.removeEventListener('keydown', () => console.log('keyboard controls are destroyed'))
  }
}

export default KeyboardControl
