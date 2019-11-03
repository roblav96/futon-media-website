import { PluginFunction } from 'vue'

export const HotFlash = {
	install: function(Vue) {
		if (process.env.NODE_ENV == 'production') return
		module.hot.removeStatusHandler(HotFlash.statusHandler)
		module.hot.addStatusHandler(HotFlash.statusHandler)
	} as PluginFunction<never>,

	statusHandler: function(status) {
		if (status == 'check') {
			document.body.classList.add('hidden')
		}
		if (status == 'idle') {
			setTimeout(() => document.body.classList.remove('hidden'), 100)
		}
	} as Parameters<typeof module.hot.addStatusHandler>[0],
}
export default HotFlash
