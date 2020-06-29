import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';

export const selectProductsState = createFeatureSelector<fromProducts.State>(
  fromProducts.productsFeatureKey
);

export const selectAllProducts = createSelector(
  selectProductsState,
  products => Object.values(products || { }).filter(product => product.id !== 0)
);

export const selectProductById = ({ id }: { id: number; }) => createSelector(
  selectProductsState,
  products => products[id]
);

