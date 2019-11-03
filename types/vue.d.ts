import Vue, { VueConstructor, DirectiveOptions } from 'vue'

declare module 'vue/types/vue' {
	interface VueConstructor {
		prototype: Vue
	}
}

declare module 'vue/types/options' {
	interface DirectiveOptions {
		[key: string]: any
	}
}

declare module 'vue/types/vnode' {
	interface VNodeDirective {
		rawName: string
		def: DirectiveOptions
	}
}
