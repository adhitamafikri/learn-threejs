const path = require('path')

module.exports = {
  assets: path.resolve(__dirname, 'src/assets'),

  scene: path.resolve(__dirname, 'src/scene'),
  shapes: path.resolve(__dirname, 'src/shapes'),
  lights: path.resolve(__dirname, 'src/lights'),
  animations: path.resolve(__dirname, 'src/animations'),

  controls: path.resolve(__dirname, 'src/controls'),

  instances: path.resolve(__dirname, 'src/instances'),

  styles: path.resolve(__dirname, 'src/styles')
}
