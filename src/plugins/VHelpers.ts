import Vue, { PluginFunction } from 'vue'
import * as _ from 'lodash'

export const VHelpers = {
	install: function(Vue) {
		Object.defineProperty(Vue.prototype, '$vm', {
			get(this: Vue) {
				return this.$root
			},
			configurable: false,
			enumerable: false,
		})
		Vue.prototype.$_ = _
		Vue.prototype.$log = console.log
		Vue.prototype.$development = process.env.NODE_ENV == 'development'
		Vue.prototype.$production = process.env.NODE_ENV == 'production'
	} as PluginFunction<never>,
}
export default VHelpers

declare module 'vue/types/vue' {
	interface Vue {
		$vm: this
		$_: typeof _
		$log: typeof console.log
		$development: boolean
		$production: boolean
	}
}
