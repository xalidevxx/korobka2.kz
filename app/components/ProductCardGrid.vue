<template>
	<v-row>
		<v-col
			v-for="(p, i) in products"
			:key="i"
			cols="6"
			sm="4"
			md="4"
			lg="4"
			xl="4"
			xxl="4"
		>
			<ProductCard :product="p" />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';
import type { IProduct } from '~/interfaces/product.interface';

const products: IProduct[] = [
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+1',
		name: 'Товар 1',
		description: 'Описание товара 1',
	},
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+2',
		name: 'Товар 2',
		description: 'Описание товара 2',
	},
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+3',
		name: 'Товар 3',
		description: 'Описание товара 3',
	},
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+4',
		name: 'Товар 4',
		description: 'Описание товара 4',
	},
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+5',
		name: 'Товар 5',
		description: 'Описание товара 5',
	},
	{
		img: 'https://via.placeholder.com/400x200?text=Товар+6',
		name: 'Товар 6',
		description: 'Описание товара 6',
	},
];
</script>
