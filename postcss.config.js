module.exports = {
	modules: true,
	plugins: [
		require('postcss-discard-comments')({ removeAll: true }),
		require('postcss-import'),
		require('tailwindcss'),
		require('postcss-preset-env')({ stage: 1 }),
	],
}
