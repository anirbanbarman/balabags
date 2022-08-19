
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

{ path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },

{ path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },

{ path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },

{ path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) },

{ path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
