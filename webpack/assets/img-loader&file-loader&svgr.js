if (global.isInstall) {
  const script = "npm install -D imagemin imagemin-gifsicle imagemin-pngquant imagemin-mozjpeg @svgr/webpack file-loader url-loader img-loader"
  require('../helpers/shellExec')(script)
}
const imgPath = 'images/';
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = function (config) {
  config.module.rules.push(
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        // {
        //   loader: 'file-loader',
        //   options: {
        //     name: imgPath + '[name].[ext]'
        //   }
        // },
        {
          loader: 'url-loader',
          options: {
            name: imgPath + '[name].[ext]',
            limit: false,
          },
        },
        {
          loader: 'img-loader',
          options: {
            plugins: [
              imageminGifsicle({
                interlaced: false
              }),
              imageminMozjpeg({
                progressive: true,
                arithmetic: false
              }),
              imageminPngquant({
                floyd: 0.5,
                speed: 2
              })
            ]
          }
        }
      ]
    }
  )
}