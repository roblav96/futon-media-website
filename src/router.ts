import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'is-active',
	routes: [
		{ path: '*', redirect: { name: 'home' } },
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('./views/Register.vue'),
		},
	],
})

declare module 'vue-router/types/router' {
	interface VueRouter {
		onReady(cb: (route: Partial<Route>) => void | Promise<void>): void
	}
}
