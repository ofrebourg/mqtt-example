// jest only
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    function() {
      return {
        visitor: {
          MetaProperty(path) {
            // vite relies on import.meta.env
            // jest wants process.env
            path.replaceWithSourceString('process')
          }
        }
      }
    }
  ]
}
