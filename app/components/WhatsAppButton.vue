<template>
	<v-btn
		v-if="icon"
		href="https://wa.me/77081112293"
		target="_blank"
		class="bg-success text-white"
		icon="mdi-whatsapp"
		density="comfortable"
	/>
	<v-btn
		v-else
		href="https://wa.me/77081112293"
		target="_blank"
		rounded
		block
		class="bg-success text-white"
		prepend-icon="mdi-whatsapp"
	>
		+7 (708) 111-22-93
	</v-btn>
</template>

<script setup lang="ts">
const { icon } = defineProps<{
	icon?: boolean;
}>();
</script>
