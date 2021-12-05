// const webpack = require('webpack')

/** @type { import("@vue/cli-service").ProjectOptions } */
module.exports = {
	// filenameHashing: false,
	css: {
		// extract: true,
		sourceMap: process.env.NODE_ENV == 'development',
		loaderOptions: {
			sass: {
				sassOptions: {
					// fiber: require('fibers'),
				},
			},
			// scss: {
			// 	implementation: require('sass'),
			// 	sassOptions: {
			// 		fiber: require('fibers'),
			// 	},
			// },
			// 	// scss: {
			// 	// 	prependData: `@import "~@/styles/variables.scss";`,
			// 	// },
			// postcss: {
			// 	plugins: [
			// 		// require('postcss-import'),
			// 		// require('postcss-discard-comments')({ removeAll: true }),
			// 		require('tailwindcss'),
			// 		// require('postcss-preset-env')({ stage: 1 }),
			// 	],
			// },
		},
	},
	// configureWebpack(config) {
	// 	// delete config.node.process
	// 	// config.optimization.usedExports = true
	// 	// config.optimization.concatenateModules = true
	// 	// config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
	// 	// delete config.optimization.splitChunks
	// },
	/** @param config { import("webpack-chain") } */
	chainWebpack(config) {
		// config.resolve.alias.store.delete('@')
		config.node.store.set('module', 'empty')
		// config.devtool('source-map')
		config.devtool(process.env.NODE_ENV == 'development' ? 'eval-source-map' : 'source-map')
		// config.plugins.delete('prefetch')
		// config.plugins.delete('preload')
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(args => {
			args[0].clearConsole = false
			return args
		})
		config.plugin('define').tap(args => {
			args[0]['process.env'].DOMAIN = `"${
				process.env.NODE_ENV == 'development'
					? 'http://192.168.1.252:8096'
					: 'https://emby.futon.media'
			}"`
			return args
		})
	},
}
