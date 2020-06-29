import { ILink } from 'src/app/shared/interfaces/link.interface';

export const DashboardLinks: ILink[] = [
  {
    name: 'Products',
    icon: 'icon-library',
    link: 'products',
    permissions: ['create product', 'edit product']
  },
  {
    name: 'Purchases',
    icon: 'icon-truck',
    link: 'purchases',
    permissions: ['make purchase', 'edit purchase']
  },
  {
    name: 'Sellers',
    icon: 'icon-exchange',
    link: 'sellers',
    permissions: ['create seller', 'edit seller']
  },
  {
    name: 'Sales',
    icon: 'icon-cart-plus',
    link: 'sales',
    permissions: ['make sale', 'edit sale']
  },
  {
    name: 'Inventory',
    icon: 'icon-basket',
    link: 'inventory',
    permissions: ['edit inventory quantity']
  },
  {
    name: 'Users',
    icon: 'icon-user',
    link: 'users',
    permissions: ['assign role', 'change role permissions']
  },
  {
    name: 'Reports',
    icon: 'icon-docs',
    link: 'reports',
    permissions: ['view report']
  },
];