const { createApp } = Vue;

const vueApp = createApp({
	data() {
		return {
			name: 'Brad',
			keydownData: '',
			enterData: '',
		};
	},
	methods: {
		showAlert() {
			window.alert('hello world');
		},
		setKeydownData(event) {
			this.keydownData = event.target.value;
		},
		setEnterData(event) {
			this.enterData = event.target.value;
		},
	},
});

vueApp.mount('#assignment');
