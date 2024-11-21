<template>
	<v-row>
		<v-col
			v-for="(p, i) in products"
			:key="i"
			cols="12"
			sm="6"
			md="4"
			lg="4"
			xl="4"
			xxl="4"
			class="pa-2"
		>
			<ProductCard :product="p" />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';
import type { IProduct } from '~/interfaces/product.interface';

const { products } = defineProps<{
	products: IProduct[];
}>();
</script>
