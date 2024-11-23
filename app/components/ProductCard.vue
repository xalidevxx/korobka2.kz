<template>
	<v-card max-width="400px" class="mx-auto">
		<v-img :src="product.img" height="380px" cover :alt="product.name" />
		<v-card-title>{{ product.name }}</v-card-title>
		<v-card-text>{{ product.description }}</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import type { IProduct } from '~/interfaces/product.interface';

const { product } = defineProps<{
	product: IProduct;
}>();
</script>
