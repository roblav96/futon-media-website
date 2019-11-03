<template>
	<form v-on:submit.prevent="submit">
		<b-modal canCancel="true"></b-modal>
	</form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class SignUp extends Vue {
	static async open() {
		this.$buefy.modal.open({
			parent: this,
			component: ModalForm,
			hasModalCard: true,
			customClass: 'custom-class custom-class-2',
		})
	}

	open() {
		this.wtf
		console.log(`this.wtf ->`, this.wtf)
	}

	email = ''
	password = ''
}
</script>
