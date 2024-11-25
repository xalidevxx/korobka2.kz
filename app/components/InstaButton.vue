<template>
	<v-btn
		v-if="icon"
		href="https://wa.me/77081112293"
		target="_blank"
		class="instagram text-white"
		icon="mdi-instagram"
		density="comfortable"
	/>
	<v-btn
		v-else
		href="https://www.instagram.com/korobka_kz2/"
		target="_blank"
		rounded
		block
		class="instagram text-white"
		prepend-icon="mdi-instagram"
	>
		@korobka_kz2
	</v-btn>
</template>

<script setup lang="ts">
const { icon } = defineProps<{
	icon?: boolean;
}>();
</script>

<style scoped lang="scss">
.instagram {
	background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
}
</style>
