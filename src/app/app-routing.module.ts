import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListComponent } from './pages/list/list.component';
import { ListResolver } from './services/list.resolver';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: ListComponent, resolve: { result: ListResolver } },
  { path: ':category', component: ListComponent, resolve: { result: ListResolver } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
