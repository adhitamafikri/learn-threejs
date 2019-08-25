import * as Sphere from 'shapes/Sphere'

import {
  walk
} from 'controls/movement/walking'

/**
 * @return {THREE.Mesh} ball
 */
function RedBall() {
  this._ball = Sphere.create()
  console.log('RedBall Object')
}

RedBall.prototype = {
  instantiate: function () {
    return this._ball
  },

  control: function (keyCode) {
    walk(this._ball, keyCode)
  }
}

export default RedBall
