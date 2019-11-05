<template>
	<b-navbar fixed-top :is-active.sync="active" class="is-dark" wrapper-class="container">
		<template slot="brand">
			<b-navbar-item tag="router-link" to="home">
				<!-- <img class="mr-2" src="/undraw_movie_night.svg" alt="Futon Media" /> -->
				<img class="mr-3" src="/emby-logo.png" alt="Emby Media" />
				<!-- <b-icon icon="sofa" class="mr-2" size="is-medium" /> -->
				<span class="font-bold text-lg">Futon Media</span>
			</b-navbar-item>
			<!-- <b-navbar-item tag="router-link" to="home">
				<img src="/emby-banner-light.png" alt="Emby Media" />
				<span class="ml-2 font-mono font-black text-lgg">Futon Media</span>
			</b-navbar-item> -->
		</template>
		<!-- <template slot="start">
			<b-navbar-item tag="router-link" to="guide">
				<b-icon icon="rocket" class="mr-1" />
				<span>Quick Start</span>
			</b-navbar-item>
		</template> -->
		<template slot="end">
			<b-navbar-item tag="router-link" to="quickstart">
				<b-icon icon="rocket" class="ml-0 mr-1" />
				Quick Start
			</b-navbar-item>
			<!-- <b-navbar-item tag="router-link" to="help">
				<b-icon icon="help" class="ml-0 mr-1" />
				Help
			</b-navbar-item> -->
			<b-navbar-item tag="div">
				<div class="buttons">
					<router-link class="button is-success pl-5" to="signup">
						<b-icon icon="account-plus" />
						<strong>Sign Up</strong>
					</router-link>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
	active = false
	mounted() {
		this.$router.afterEach(() => this.active = false)
	}
}
</script>

<style>
.navbar-item {
	display: flex;
}
</style>
