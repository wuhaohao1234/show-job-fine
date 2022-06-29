const CracoLessPlugin = require('craco-less');
const path = require('path')
module.exports = {
  webpack: {
    configure: (webpackConfig, {
      env, paths
    }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
          // ...{
          //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
          //   chunkFilename: 'static/js/[name].js'
          // },
          path: path.resolve(__dirname, 'docs'), // 修改输出文件目录
          publicPath: 'show-job-fine'
      }
      return webpackConfig
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};