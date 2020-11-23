import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WorkItem } from './workItem';

@Injectable({
  providedIn: 'root'
})
export class WorkGeneratorService {

  items$: Observable<WorkItem[]>;

  private itemsSubject: BehaviorSubject<WorkItem[]>;
  private generatePoint: number;
  private low: number;
  private high: number;
  private selectedWorkItem: WorkItem;

  private items: WorkItem[];
  private allWorkItem: WorkItem[] = [];

  get countLowWorkItem(): number {
    return this.low;
  }

  get countHighWorkItem(): number {
    return this.high;
  }

  get itemDetail(): WorkItem {
    return this.selectedWorkItem;
  }

  constructor() {
    this.generateWorkList(5000);

    this.itemsSubject = new BehaviorSubject(this.items);
    this.items$ = this.itemsSubject.asObservable();
   }


  addItem(form: {name: string, date: string}): void{
    const newItem = {
      id: this.items.length,
      workName : form.name,
      point : this.numberGenerator(),
      level: this.generatePoint < 0.5 ? 'low' : 'high',
      createDate: !form.date ? new Date() : form.date
    }as WorkItem;
    this.allWorkItem = [newItem, ...this.allWorkItem];
    this.items = this.allWorkItem;
    this.itemsSubject.next(this.items);
  }

  getItem(id: number): Observable<WorkItem> {
    return of(this.items.find(_ => _.id === id));
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

  setSelectedWorkItem(item: WorkItem): void {
    this.selectedWorkItem = item;
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


  private setFooter(): void {
    this.low = this.items.filter(x => x.level === 'low').length;
    this.high = this.items.filter(x => x.level === 'high').length;
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
