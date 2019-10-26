<template>
	<b-navbar fixed-top class="is-dark" wrapper-class="container">
		<template slot="brand">
			<div class="navbar-item">
				<img src="/emby-logo-white.png" alt="Emby Media" />
			</div>
		</template>
		<template slot="end">
			<b-navbar-item tag="button" class="button is-primary is-active">
				<b-icon icon="account-plus" class="mr-4"></b-icon>
				Registerdd
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TheNavBar extends Vue {}
</script>
