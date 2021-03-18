import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../shared/components/layout/layout.component';
import {GuestGuard} from '../shared/guards/guest.guard';
import {AuthGuard} from '../shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        data: {
          breadcrumb: 'Products'
        }
      },
      {
        path: 'purchases',
        loadChildren: () => import('./purchases/purchases.module').then(m => m.PurchasesModule),
        data: {
          breadcrumb: 'Purchases'
        }
      },
      {
        path: 'sellers',
        loadChildren: () => import('./sellers/sellers.module').then(m => m.SellersModule),
        data: {
          breadcrumb: 'Sellers'
        }
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
        data: {
          breadcrumb: 'Sale'
        }
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule),
        data: {
          breadcrumb: 'Inventory'
        }
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
        data: {
          breadcrumb: 'Reports'
        }
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        data: {
          breadcrumb: 'Users'
        }
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule),
        data: {
          breadcrumb: 'My Profile'
        }
      },
      {
        path: 'insights',
        loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule),
        data: {
          breadcrumb: 'Insights'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
