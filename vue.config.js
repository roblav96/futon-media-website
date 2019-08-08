module.exports = {
	css: { sourceMap: process.env.NODE_ENV == 'development' },
	chainWebpack(config) {
		config.node.store.set('module', 'empty')
		config.devtool(process.env.NODE_ENV == 'development' ? 'eval-source-map' : 'source-map')
		config.plugins.delete('no-emit-on-errors')
		// config.plugin('friendly-errors').tap(args => {
		// 	args[0].clearConsole = false
		// 	return args
		// })
		config.plugins.delete('friendly-errors')
		const { transformer, formatter } = require('@vue/cli-service/lib/util/resolveLoaderError')
		config.plugin('friendly-errors').use(require('friendly-errors-webpack-plugin'), [
			{
				additionalTransformers: [transformer],
				additionalFormatters: [formatter],
				clearConsole: false,
			},
		])
	},
}
