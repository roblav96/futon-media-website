<template>
	<div class="">
		<TheNavBar />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	components: {
		TheNavBar: () => import('@/components/TheNavBar.vue'),
	},
})
export default class App extends Vue {}
</script>

<!-- <style src="tailwindcss/base.css"></style> -->
<style src="@mdi/font/css/materialdesignicons.css"></style>
<!-- <style src="buefy/dist/buefy.css"></style> -->
<style lang="scss" src="@/theme.scss"></style>
<style src="tailwindcss/utilities.css"></style>

<style>
html {
	min-height: 100vh;
}
</style>
