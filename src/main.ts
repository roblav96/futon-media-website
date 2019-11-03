import 'dts-generate'

import '@ibm/plex/css/ibm-plex.css'
import '@mdi/font/css/materialdesignicons.css'
import './styles/variables.scss'
// import 'tailwindcss/base.css'
import 'tailwindcss/utilities.css'

import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.performance = false
Vue.config.devtools = false

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

import HotFlash from './plugins/HotFlash'
Vue.use(HotFlash)

import VHelpers from './plugins/VHelpers'
Vue.use(VHelpers)

import './vm'
