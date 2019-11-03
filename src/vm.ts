import { Vue, Component } from 'vue-property-decorator'
import router from './router'
import App from './App.vue'

@Component({ router, render: h => h(App) })
class Vm extends Vue {
	created() {
		console.log(`created`)
		console.log(`this.$vm ->`, this.$vm)
		router.onReady(route => {
			this.$mount('#app')
		})
	}
	mounted() {
		console.log(`mounted`)
	}
}

const vm = new Vm()
export default vm

if (process.env.NODE_ENV == 'development') {
	Object.assign(window, { vm })
}
