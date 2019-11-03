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
			path: '/signup',
			name: 'signup',
			component: () => import('./views/SignUp.vue'),
		},
		{
			path: '/quickstart',
			name: 'quickstart',
			component: () => import('./views/QuickStart.vue'),
		},
	],
})

declare module 'vue-router/types/router' {
	interface VueRouter {
		onReady(cb: (route: Partial<Route>) => void | Promise<void>): void
	}
}
