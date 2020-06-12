module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Sustainability At Network Rail'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sustainability-at-network-rail'
    : '/'
}
