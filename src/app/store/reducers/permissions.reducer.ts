import { createReducer } from '@ngrx/store';
import { ILink } from 'src/app/shared/interfaces/link.interface';
import { SalesLinks } from '../data-files/sales-links.datafile';
import { DashboardLinks } from '../data-files/dashboard-links.datafiles';


export const permissionsFeatureKey = 'permissions';

export interface State {
  dashboard: ILink[];
  sales: ILink[];
  reports: ILink[];
}

export const initialState: State = {
  dashboard: DashboardLinks,
  sales: SalesLinks,
  reports: [
    {
      name: 'Sales Report',
      icon: 'icon-cart-plus',
      link: 'reports/sales',
      permissions: ['view sales report']
    },
    {
      name: 'Purchases Report',
      icon: 'icon-truck',
      link: 'reports/purchases',
      permissions: ['view sales report']
    },
    {
      name: 'MPesa Receipts Report',
      icon: 'icon-dollar',
      link: 'reports/mpesa-receipt-report',
      permissions: ['view m-pesa receipt report']
    }
  ]
};


export const reducer = createReducer(
  initialState,

);

