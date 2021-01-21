import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WorkItemsState } from '../redux/work-item-state';
import * as WorkItemActions from '../redux/work-item-actions';
import { WorkItem } from '../shared/workItem';
import { WorkItemSelectorService } from '../redux/work-item-selector.service';

@Injectable({
  providedIn: 'root'
})
export class WorkGeneratorService {

  items$: Observable<WorkItem[]>;
  private workItemCounter = 1;
  private generatePoint: number;
  private low: number;
  private high: number;


  private actualFilter = '';

  get countLowWorkItem(): number {
    this.workItemSelector.getLevelCount$('low').subscribe(_ => {this.low = _; } );
    return this.low;
  }

  get countHighWorkItem(): number {
    this.workItemSelector.getLevelCount$('high').subscribe(_ => {this.high = _; } );
    return this.high;
  }

  constructor(
    private store: Store< {payload: WorkItemsState} >,
    private workItemSelector: WorkItemSelectorService) {
      this.generateWorkItems(500);
      this.items$ = workItemSelector.getAllItems$();
  }

  private generateWorkItems(count: number): void {
    for (let i = 0; i < count; i++) {
      this.store.dispatch(WorkItemActions.createWorkItemsAction(this.generateWorkItem()));
    }
  }

  getItem(id: number): Observable<WorkItem> {
    return this.workItemSelector.getItem$(id);
  }

  filter(text: string): void {
    this.actualFilter = text;
    if (this.actualFilter === '') {
      this.items$ = this.workItemSelector.getAllItems$();
    }
  }

  private generateWorkItem(): WorkItem {
    return {
      id : this.workItemCounter++,
      workName : this.stringGenerator(),
      point : this.numberGenerator(),
      level: this.generatePoint < 0.5 ? 'low' : 'high',
      createDate: this.randomDate(new Date(2020, 0, 1), new Date())
    } as WorkItem;
  }

  createWorkItem(form: {name: string, date: string}): void {
    const newItem = {
      id: this.workItemCounter++,
      workName : form.name,
      point : this.numberGenerator(),
      level: this.generatePoint < 0.5 ? 'low' : 'high',
      createDate: !form.date ? new Date() : form.date
    }as WorkItem;
    this.store.dispatch(WorkItemActions.createWorkItemsAction(newItem));
  }

  private stringGenerator(): string {
    let randomCodes = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      randomCodes += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomCodes;
  }

  private numberGenerator(): number {
    this.generatePoint = (Math.round(Math.random() * 10) / 10);
    return this.generatePoint;
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
