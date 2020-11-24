import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkContentComponent } from './work-modul/work-content/work-content.component';
import { AddWorkItemComponent } from './work-modul/work-content/work-detail-modul/add-work-item/add-work-item.component';
import { WorkItemDetailComponent } from './work-modul/work-content/work-detail-modul/work-item-detail/work-item-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'content', component: WorkContentComponent,
    children: [
      { path: 'detail/:id', component: WorkItemDetailComponent },
      { path: 'addWorkItem', component: AddWorkItemComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
