import type { IProduct } from './product.interface';

export interface ICategory {
	id: number;
	name: string;
	data: IProduct[];
}
