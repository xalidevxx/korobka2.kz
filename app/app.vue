<template>
	<v-app>
		<v-app-bar prominent>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
			<v-spacer />
			<div class="pr-2">
				<WhatsAppButton :icon="true" />
			</div>
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
					<WhatsAppButton class="mt-4" />
				</div>
			</template>
		</v-navigation-drawer>

		<v-main>
			<div class="pa-4">
				<h1 class="mb-8 mt-4 text-h5">{{ section.name }}</h1>
				<ProductCardGrid :products="section.data" />
			</div>
		</v-main>

		<v-bottom-sheet v-model="sheet" inset>
			<v-card align="center">
				<v-card-title>
					У нас более
					<span style="color: red; text-decoration: underline"> 1 млн+ </span>
					коробок 😱🤩
				</v-card-title>
				<v-card-text>
					Напишите нам. Мы найдем для вас коробку под ваши нужды и по самым
					низким ценам👇
				</v-card-text>
				<v-card-actions>
					<WhatsAppButton />
				</v-card-actions>
			</v-card>
		</v-bottom-sheet>
	</v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { categories } from './data/categories';
import type { ICategory } from './interfaces/category.interface';
import { useRouter, useRoute } from '#app';

const metaTitle =
	'Картонные коробки купить Алматы, Астана, Шымкент - подарочные, упаковочные - Korobka2.kz';
const metaDescription =
	'Картонные подарочные и упаковочные коробки, большие и маленькие, в наличии и на заказ, оптом и в розницу, крафтовые, для шаров, доставка по Казахстану.';
const metaImage = 'https://korobka2.kz/icons/icon-512.png';

useSeoMeta({
	title: metaTitle,
	ogTitle: metaTitle,
	description: metaDescription,
	ogDescription: metaDescription,
	ogImage: metaImage,
	twitterCard: metaImage,
	keywords:
		'коробки, картонные коробки, подарочные коробки, упаковочные коробки, Алматы, Алматы, Шымкент, Казахстан',
	ogType: 'website',
	ogUrl: 'https://korobka2.kz',
});

const theme = useTheme();
const router = useRouter();
const route = useRoute();

const drawer = ref<boolean>(false);
const sheet = ref<boolean>(true);
const darkTheme = ref<boolean>(theme.global.current.value.dark);
const menu = ref<ICategory[]>(categories);
const queryParams = route.query['search'];
const index = queryParams
	? categories.findIndex(c => c.metaTitle === queryParams)
	: 0;
const selected = ref<[number]>([(categories[index] as ICategory).id]);
const section = ref<ICategory>(categories[index] as ICategory);

const select = (v: [number]) => {
	selected.value = v;
	drawer.value = false;
	window.scrollTo(0, 0);
};

watch(selected, (c: [number]) => {
	section.value = categories[c[0] - 1] as ICategory;
	useHead({
		title: section.value.metaTitle,
		meta: [
			{ property: 'og:title', content: section.value.metaTitle },
			{ name: 'description', content: section.value.metaDescription },
			{ property: 'og:description', content: section.value.metaDescription },
			{ name: 'keywords', content: section.value.metaKeywords },
		],
	});
	router.push({
		path: '/',
		query: {
			search: section.value.metaTitle,
		},
	});
});

watch(darkTheme, v => {
	theme.global.name.value = v ? 'dark' : 'light';
});
</script>
