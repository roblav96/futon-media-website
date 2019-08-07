<template>
	<b-navbar :fixed-top="true" class="is-dark has-background-grey-darker">
		<template slot="brand">
			<div class="navbar-item py-0">
				<img src="/icons8-sofa.svg" alt="Futon Media" />
				<!-- <img src="/undraw_movie_night_93wl.svg" alt="Futon Media" /> -->
			</div>
			<!-- <div class="navbar-item">Futon Media</div> -->
		</template>
		<template slot="start">
			<b-navbar-item class="is-active">
				Register
			</b-navbar-item>
			<b-navbar-item href="#">
				Documentation
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-item tag="div">
				<div class="buttons">
					<a class="button is-primary">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light">
						Log in
					</a>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class TheNavBar extends Vue {}
</script>
