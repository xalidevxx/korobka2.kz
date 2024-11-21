<template>
	<v-app>
		<v-app-bar prominent>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

			<v-toolbar-title>Korobka2.kz</v-toolbar-title>

			<v-spacer />

			<v-btn icon="mdi-dots-vertical" variant="text" />
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			:location="$vuetify.display.mobile ? 'bottom' : undefined"
			temporary
		>
			<v-list :items="items" />
		</v-navigation-drawer>

		<v-main style="height: 500px">
			<v-card-text>
				The navigation drawer will appear from the bottom on smaller size
				screens.
			</v-card-text>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		group: null,
		items: [
			{
				title: 'Foo',
				value: 'foo',
			},
			{
				title: 'Bar',
				value: 'bar',
			},
			{
				title: 'Fizz',
				value: 'fizz',
			},
			{
				title: 'Buzz',
				value: 'buzz',
			},
		],
	}),

	watch: {
		group() {
			this.drawer = false;
		},
	},
};
</script>
