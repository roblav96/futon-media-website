<template>
	<b-navbar fixed-top class="is-dark" wrapper-class="container">
		<template slot="brand">
			<b-navbar-item tag="router-link" to="home">
				<img src="/emby-banner-light.png" alt="Emby Media" />
			</b-navbar-item>
		</template>
		<!-- <template slot="start"> -->
			<!-- <b-navbar-item tag="div">
				<b-icon icon="account-plus" class="mr-2" />
				<span class="font-mono font-black">Futon Media</span>
			</b-navbar-item> -->
		<!-- </template> -->
		<template slot="end">
			<b-navbar-item tag="div">
				<div class="buttons">
					<router-link class="button is-primary" to="signup">
						<strong>Sign Up</strong>
					</router-link>
					<a class="button is-light">
						Log in
					</a>
				</div>
			</b-navbar-item>
			<!-- <b-navbar-item tag="router-link" to="register">
				<b-icon icon="account-plus" class="mr-2" />
				Register
			</b-navbar-item> -->
		</template>
	</b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {

}
</script>
