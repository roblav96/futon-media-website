module.exports = {
	css: {
		// extract: true,
		sourceMap: process.env.NODE_ENV == 'development',
		// loaderOptions: {
		// 	sass: {
		// 		implementation: require('sass'),
		// 		sassOptions: {
		// 			fiber: require('fibers'),
		// 		},
		// 	},
		// 	// scss: {
		// 	// 	implementation: require('sass'),
		// 	// 	sassOptions: {
		// 	// 		fiber: require('fibers'),
		// 	// 	},
		// 	// },
		// 	// scss: {
		// 	// 	prependData: `@import "~@/styles.scss";`,
		// 	// },
		// 	// postcss: {
		// 	// 	plugins: [
		// 	// 		// require('postcss-import'),
		// 	// 		// require('postcss-discard-comments')({ removeAll: true }),
		// 	// 		require('tailwindcss'),
		// 	// 		// process.env.NODE_ENV != 'development' && require('autoprefixer'),
		// 	// 	],
		// 	// },
		// },
	},
	// configureWebpack(config) {
	// 	delete config.optimization.splitChunks
	// },
	chainWebpack(config) {
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
	},
}
