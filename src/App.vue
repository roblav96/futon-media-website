<template>
	<div id="app">
		<NavBar />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	components: {
		NavBar: () => import('./components/NavBar.vue'),
	},
})
export default class extends Vue {}
</script>

<style></style>

<!-- <style src="@ibm/plex/css/ibm-plex.css"></style>
<style src="@mdi/font/css/materialdesignicons.css"></style>
<style lang="scss" src="./styles/variables.scss"></style>
<style src="tailwindcss/base.css"></style>
<style src="tailwindcss/utilities.css"></style> -->
