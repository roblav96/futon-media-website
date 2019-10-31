<template>
	<section class="hero is-dark has-background-black-ter is-fullheight-with-navbar">
		<div class="hero-body items-start">
			<div class="container">
				<div class="columns">
					<div class="column">
						<img src="/undraw_chilling_8tii.svg" />
					</div>
					<div class="column">
						Second column
					</div>
					<div class="column">
						Third column
					</div>
					<div class="column">
						Fourth column
					</div>
				</div>
				<h1 class="title">
					Home
				</h1>
				<h2 class="subtitle">
					Fullheight subtitle
				</h2>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>
