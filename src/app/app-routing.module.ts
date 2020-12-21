import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  /* { path: 'content', component: WorkContentComponent,
    children: [
      { path: 'detail/:id', component: WorkItemDetailComponent },
      { path: 'addWorkItem', component: AddWorkItemComponent }
    ] }, */
  { path: 'items', loadChildren: () => import('./component/work-content/work-item.module').then(m => m.WorkItemModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
