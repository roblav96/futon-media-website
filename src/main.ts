import 'tailwindcss/base.css'
import '@mdi/font/css/materialdesignicons.css'
import 'buefy/dist/buefy.css'
import 'tailwindcss/utilities.css'
import './styles.css'

import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.performance = false
Vue.config.devtools = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Buefy, { BuefyConfig } from 'buefy'
Vue.use(Buefy, {
	defaultDialogCancelText: 'Cancel',
	defaultDialogConfirmText: 'Confirm',
	defaultIconPack: 'mdi',
	defaultInputAutocomplete: 'off',
	defaultSnackbarDuration: 5000,
	defaultToastDuration: 5000,
	defaultTooltipType: 'is-dark',
} as BuefyConfig)

import './vm'
