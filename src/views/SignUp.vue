<template>
	<section class="section is-medium">
		<div class="container">
			<div class="columns is-gapless is-centered">
				<div class="column is-narrow">
					<form
						class="panel is-primary has-background-white-bis"
						v-on:submit.prevent="submit"
					>
						<p class="panel-heading">Sign Up</p>
						<div class="panel-block is-block">
							<b-field>
								<b-input
									placeholder="Email"
									type="email"
									icon="email-outline"
									v-model="email"
									required
								></b-input>
							</b-field>
							<b-field>
								<b-input
									placeholder="Password"
									type="password"
									icon="lock-outline"
									v-model="password"
									password-reveal
									required
								></b-input>
							</b-field>
						</div>
						<div class="panel-block">
							<button class="button is-link is-fullwidth">
								<b-icon icon="send-outline" class="mr-2 font-hairline" />
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class SignUp extends Vue {
	email = ''
	password = ''

	submit() {
		console.log(`submit`)
	}
}
</script>
