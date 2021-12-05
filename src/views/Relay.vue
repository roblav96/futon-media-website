<template>
	<section class="section">
		<div class="container">
			<div class="columns is-mobile is-centered mb-6">
				<div class="panel is-success has-background-white-bis column max-w-xs">
					<h1 class="title">Relay</h1>
					<b-progress :type="alive ? 'is-success' : 'is-danger'"></b-progress>
					<div class="text-center">
						<b-tag :type="alive ? 'is-success' : 'is-danger'" size="is-large">
							{{ username }}
						</b-tag>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Sockette from 'sockette'

@Component({})
export default class Relay extends Vue {
	ws: Sockette
	alive = false
	username = '...'
	created() {
		this.ws = new Sockette(`${process.env.DOMAIN.replace('http', 'ws')}/relay`, {
			onopen: (event) => {
				this.alive = true
				this.username = '...'
			},
			onclose: (event) => {
				this.alive = false
				this.username = '...'
			},
			onmessage: (event) => {
				if (event.data == 'ping') {
					return this.ws.send('pong')
				}
				let data = JSON.parse(event.data)
				if (data.username) {
					this.username = data.username
				}
			},
		})
	}
	destroyed() {
		this.ws.close()
	}
}
</script>
