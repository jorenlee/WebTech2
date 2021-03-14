module, Exports = {
    publicPath: process. env. NODE_ENV === 'production'
      ? './' // prod
      : '/', // dev
  }