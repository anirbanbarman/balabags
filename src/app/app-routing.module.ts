import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
