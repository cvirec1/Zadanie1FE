import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkContentComponent } from './work-content.component';
import { AddWorkItemComponent } from './work-detail-modul/add-work-item/add-work-item.component';
import { WorkItemDetailComponent } from './work-detail-modul/work-item-detail/work-item-detail.component';

const routes: Routes = [
  {
    path: '', component: WorkContentComponent,
    children: [
      {
        path: '',
        component: AddWorkItemComponent,
      },
      {
        path: 'detail/:id',
        component: WorkItemDetailComponent,
      },
      {
        path: 'add',
        component: AddWorkItemComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkItemsRoutingModule { }
