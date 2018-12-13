const { BABEL_MODULE, NODE_ENV } = process.env
const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'
module.exports = {
  presets: [ // 预设置
    [
      '@babel/preset-env', 
      {
        modules: useESModules ? false : 'commonjs'
      }
    ]
  ]
}
