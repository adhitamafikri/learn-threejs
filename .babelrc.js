const path = require('path')
const babelPresetEnv = require('@babel/preset-env')
const aliases = require('./aliases')

const env = process.env.APP_ENV || 'development'

const options = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve('./src/')],
        alias: aliases,
      },
    ],
  ],
}

module.exports = babelPresetEnv(env, options)
