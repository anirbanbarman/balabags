import { KnowYourPricingComponent } from './know-your-pricing/know-your-pricing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
  { path: 'know-your-pricing', component: KnowYourPricingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
