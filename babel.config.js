module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ]

  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods']

  return {
    presets,
    plugins,
  }
}
