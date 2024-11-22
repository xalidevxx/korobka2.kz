<template>
	<v-dialog max-width="500">
		<template #activator="{ props: activatorProps }">
			<v-btn
				block
				rounded
				color="primary"
				prepend-icon="mdi-map-marker-outline"
				v-bind="activatorProps"
				text="Адрес"
			/>
			<v-snackbar v-model="snackbar" :timeout="2000" color="primary">
				Адрес скопирован
			</v-snackbar>
		</template>

		<template #default="{ isActive }">
			<v-card :title="address">
				<v-card-text>
					<Map />
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn
						text="Копировать адрес"
						variant="text"
						color="primary"
						rounded
						@click="copyToClipboard"
					/>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>

<script setup lang="ts">
const address = 'Алматы Баишева 12';
const snackbar = ref<boolean>(false);

const copyToClipboard = () => {
	navigator.clipboard.writeText(address).then(() => {
		snackbar.value = true;
	});
};
</script>
