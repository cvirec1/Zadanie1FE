import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WorkItemsState } from '../redux/work-item-state';
import * as WorkItemActions from '../redux/work-item-actions';
import { WorkItem } from './workItem';
import { WorkItemSelectorService } from '../redux/work-item-selector.service';

@Injectable({
  providedIn: 'root'
})
export class WorkGeneratorService {

  items$: Observable<WorkItem[]>;
  private item: WorkItem;
  private workItemCounter = 1;
  private itemsSubject: BehaviorSubject<WorkItem[]>;
  private generatePoint: number;
  private low: number;
  private high: number;
  private items: WorkItem[];
  private allWorkItem: WorkItem[] = [];


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
      this.generateWorkItems(5000);
      this.items$ = workItemSelector.getAllItems$();
  }

  getWorkItem(id: number): WorkItem {
    this.workItemSelector.getItem$(id).subscribe(_ => {this.item = _; } );
    return this.item;

  }

  private generateWorkItems(count: number): void {
    for (let i = 0; i < count; i++) {
      this.store.dispatch(WorkItemActions.createWorkItemsAction(this.generateWorkItem(i)));
    }
  }

  private generateWorkItem(itemId: number): WorkItem {
    return {
      id : this.workItemCounter++,
      workName : this.stringGenerator(),
      point : this.numberGenerator(),
      level: this.generatePoint < 0.5 ? 'low' : 'high',
      createDate: this.randomDate(new Date(2020, 0, 1), new Date())
    } as WorkItem;
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
  numberGenerator(): number {
    this.generatePoint = (Math.round(Math.random() * 10) / 10);
    return this.generatePoint;
  }

  private setFooter(): void {
    this.low = this.items.filter(x => x.level === 'low').length;
    this.high = this.items.filter(x => x.level === 'high').length;
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


  addItem(form: {name: string, date: string}): void{
    const newItem = {
      id: this.workItemCounter++,
      workName : form.name,
      point : this.numberGenerator(),
      level: this.generatePoint < 0.5 ? 'low' : 'high',
      createDate: !form.date ? new Date() : form.date
    }as WorkItem;
    this.allWorkItem = [newItem, ...this.allWorkItem];
    this.items = this.allWorkItem;
    this.itemsSubject.next(this.items);
  }

  getItem(id: number): WorkItem {
    let item: WorkItem;
    this.workItemSelector.getItem$(id).subscribe(_ => {item = _; });
    return item;
  }

  filter(text: string): void {
    this.items = this.allWorkItem.filter(x => x.workName.includes(text));
    this.itemsSubject.next(this.items);
    this.setFooter();
  }

  generateWorkList(count: number): void {
    for (let i = 0; i < count; i++) {
      this.allWorkItem.push({
        id : i,
        workName : this.stringGenerator(),
        point : this.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high',
        createDate: this.randomDate(new Date(2020, 0, 1), new Date())
      } as WorkItem);
    }
    this.items = this.allWorkItem;
    this.setFooter();
  }

}
