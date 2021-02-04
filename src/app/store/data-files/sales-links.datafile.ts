import { ILink } from 'src/app/shared/interfaces/link.interface';
export const SalesLinks: ILink[] = [
  {
    name: 'Make Sale',
    icon: 'icon-cart-plus',
    link: 'sales/make-sale',
    permissions: ['make sale']
  },
  {
    name: 'Edit Sale',
    icon: 'icon-edit',
    link: 'sales/edit-sale',
    permissions: ['edit sales']
  }
];
