<template>
	<section class="section">
		<div class="container text-center">
			<h2 class="subtitle has-text-white">
				Download
				<code class="p-1 mx-1 rounded font-medium">Emby Media</code>
				from your device's app store.
			</h2>
			<h2 class="subtitle has-text-white">
				Login with your email and password you created to Sign Up.
			</h2>
			<div class="flex justify-center">
				<figure class="image">
					<img src="/emby-clients.png" />
				</figure>
			</div>
			<router-link class="button is-rounded is-medium is-success pl-5" to="signup">
				<b-icon size="is-medium" icon="account-plus" class="ml-1 mr-3" />
				<strong>Sign Up</strong>
			</router-link>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class QuickStart extends Vue {}
</script>
