<template>
	<v-app>
		<v-app-bar prominent>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
			<v-spacer />
			<WhatsAppButton />
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" temporary>
			<v-list
				:selected="selected"
				:items="menu"
				item-title="name"
				item-value="id"
				item-props="id"
				@click:select="select($event.path as [number])"
			/>
			<template #append>
				<div class="pa-4">
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
import { categories } from './data/categories';
import type { ICategory } from './interfaces/category.interface';

const drawer = ref(false);
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
</script>
