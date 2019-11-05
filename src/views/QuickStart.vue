<template>
	<section class="section">
		<div class="container text-center">
			<div class="mx-auto max-w-xs mb-6">
				<figure class="image">
					<img src="/emby-banner-light.png" />
				</figure>
			</div>
			<h2 class="subtitle has-text-white">
				1. Download
				<code class="p-1 mx-1 rounded font-medium">Emby</code>
				from your device's app store.
			</h2>
			<h2 class="subtitle has-text-white">
				2. Login with your email and password you created to Sign Up.
			</h2>
			<div class="mx-auto max-w-xs">
				<figure class="image">
					<img src="/emby-clients.png" />
				</figure>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class QuickStart extends Vue {}
</script>
