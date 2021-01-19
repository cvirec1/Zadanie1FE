import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemComponent } from './detail/workItem/work-item.component';
import { WorkContentComponent } from './work-content.component';
import { AddWorkItemComponent } from './detail/add-work-item/add-work-item.component';
import { WorkItemDetailComponent } from './detail/work-item-detail/work-item-detail.component';

const routes: Routes = [
  {
    path: '', component: WorkContentComponent,
    children: [
      {
        path: '',
        component: WorkItemComponent,
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
