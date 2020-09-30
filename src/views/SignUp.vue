<template>
	<section class="section">
		<div class="container">
			<div class="columns is-mobile is-gapless is-centered">
				<div class="column is-narrow">
					<form
						class="panel is-success has-background-white-bis max-w-xs"
						v-on:submit.prevent="submit"
					>
						<p class="panel-heading">Sign Up</p>
						<div class="panel-block is-block">
							<b-field message="Who invited you to sign up?">
								<b-input
									placeholder="Referral"
									icon="account-arrow-right-outline"
									v-model="referral"
									required
								></b-input>
							</b-field>
							<b-field>
								<b-input
									placeholder="Email"
									type="email"
									icon="email-outline"
									validation-message="Invalid email"
									v-model="email"
									required
								></b-input>
							</b-field>
							<b-field>
								<b-input
									placeholder="Password"
									type="password"
									icon="lock-outline"
									minlength="8"
									validation-message="8 character minimum"
									v-model="password"
									password-reveal
									required
								></b-input>
							</b-field>
							<b-field>
								<b-checkbox v-model="agree" required>
									I agree not to talk about Futon Media
								</b-checkbox>
							</b-field>
						</div>
						<div class="panel-block">
							<b-button
								tag="input"
								native-type="submit"
								:type="!busy ? 'is-link' : ''"
								:disabled="!ready || busy"
								:loading="busy"
								:outlined="!ready"
								expanded
							>
								<strong>Submit</strong>
							</b-button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class SignUp extends Vue {
	email = ''
	password = ''
	referral = 'roblav96'
	agree = false
	busy = false

	get ready() {
		return (
			this.referral && this.email && this.password && this.password.length >= 8 && this.agree
		)
	}

	async submit() {
		if (!this.ready || this.busy) return
		this.busy = true
		try {
			let response = await axios.post(`${process.env.DOMAIN}/signup`, {
				referral: this.referral,
				email: this.email,
				password: this.password,
			})
			let data = response.data as { success: boolean; error: string }
			if (data.error) throw new Error(data.error)
			if (data.success) {
				this.$buefy.dialog.alert({
					type: 'is-link',
					hasIcon: true,
					icon: 'email-check',
					title: 'Confirm Emby Account Link',
					message: `Check your email inbox:<br><code>${this.email}</code>`,
					confirmText: 'Confirmed',
					onConfirm: () => this.$router.push('quickstart'),
				})
			}
		} catch (error) {
			console.error(`submit -> %O`, error)
			this.$buefy.toast.open({ message: error.message, type: 'is-danger' })
		}
		this.busy = false
	}
}
</script>
