import type { ICategory } from '~/interfaces/category.interface';
import { exclusive } from './exclusive';

export const categories: ICategory[] = [
	{
		id: 1,
		name: 'Эксклюзив',
		data: exclusive,
	},
	{
		id: 2,
		name: 'Однотонные',
		data: [],
	},
];
