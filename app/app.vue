<template>
	<v-app>
		<v-app-bar prominent>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
			<v-spacer />
			<WhatsAppButton :icon="true" />
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" temporary>
			<v-list
				:selected="selected"
				color="primary"
				@click:select="select($event.path as [number])"
			>
				<v-list-subheader>КАТАЛОГ</v-list-subheader>
				<v-list-item v-for="i in menu" :key="i.id" :value="i.id">
					<v-list-item-title>
						{{ i.name }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
			<template #append>
				<div class="px-4">
					<v-switch v-model="darkTheme" label="Темная тема" color="primary" />
				</div>
				<v-divider />
				<div class="pa-4">
					<InstaButton />
					<WhatsAppButton class="my-4" />
					<AddressButton />
				</div>
			</template>
		</v-navigation-drawer>

		<v-main>
			<div class="pa-4">
				<h1 class="mb-8 mt-4 text-h5">{{ section.name }}</h1>
				<ProductCardGrid :products="section.data" />
			</div>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { categories } from './data/categories';
import type { ICategory } from './interfaces/category.interface';

const metaTitle =
	'Картонные коробки купить Алматы - подарочные, упаковочные - Korobka2.kz';
const metaDescription =
	'Картонные подарочные и упаковочные коробки, большие и маленькие, в наличии и на заказ, оптом и в розницу, крафтовые, для шаров, доставка по Казахстану.';

useSeoMeta({
	title: metaTitle,
	ogTitle: metaTitle,
	description: metaDescription,
	ogDescription: metaDescription,
	ogImage: 'https://korobka2.kz/icons/icon-512.png',
	twitterCard: 'https://korobka2.kz/icons/icon-512.png',
});

const theme = useTheme();
const drawer = ref<boolean>(false);
const darkTheme = ref<boolean>(theme.global.current.value.dark);
const menu = ref<ICategory[]>(categories);
const selected = ref<[number]>([(categories[0] as ICategory).id]);
const section = ref<ICategory>(categories[0] as ICategory);

const select = (v: [number]) => {
	selected.value = v;
	drawer.value = false;
};

watch(selected, (c: [number]) => {
	section.value = categories[c[0] - 1] as ICategory;
});

watch(darkTheme, v => {
	theme.global.name.value = v ? 'dark' : 'light';
});
</script>
