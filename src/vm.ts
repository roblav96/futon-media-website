import { Vue, Component } from 'vue-property-decorator'
import App from './App.vue'

@Component({ render: h => h(App) })
class Vm extends Vue {
	created() {
		console.log(`created`)
		this.$mount('#app')
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
