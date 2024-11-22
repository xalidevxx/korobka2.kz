export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hook('vuetify:before-create', options => {
		if (import.meta.client) {
			options.vuetifyOptions = {
				theme: {
					defaultTheme: 'light',
				},
			};
		}
	});
});
