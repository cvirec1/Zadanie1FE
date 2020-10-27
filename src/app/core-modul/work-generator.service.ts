import { Injectable, Output } from '@angular/core';
import { WorkItem } from './workItem';

@Injectable({
  providedIn: 'root'
})
export class WorkGeneratorService {

  private generatePoint: number;
  private low: number;
  private high: number;

  private filterText = '';
  private items: WorkItem[];
  private allWorkItem: WorkItem[] = [];
  private filtredWorkitem: WorkItem[] = [];

  get countLowWorkItem(): number {
    return this.low;
  }

  get countHighWorkItem(): number {
    return this.high;
  }

  get workItems(): WorkItem[]{
    return this.items.reverse();
  }

  constructor() {
    this.generateWorkList();
   }

  filter(text: string): void {
    this.filterText = text;
    this.filtredWorkitem = this.allWorkItem.filter(x => x.workName.includes(text));
    this.items = this.filtredWorkitem;
    this.setFooter();
  }

  generateWorkList(): void {
    for (let i = 0; i < 5000; i++) {
      this.allWorkItem.push({
        id : i,
        workName : this.stringGenerator(),
        point : this.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high',
        createDate: this.randomDate(new Date(2020, 0, 1), new Date())
      } as WorkItem);
    }
    this.setFooter();
  }

  addWorkItem(form: {name: string, date: string}): void {
    if (form.name.length > 0) {
      this.allWorkItem.push({
        id: 0,
        workName: form.name,
        point: this.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high',
        createDate: !form.date ? new Date() : form.date
      }as WorkItem);
      this.setFooter();
    }
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
    this.items = this.filterText !== '' ? this.filtredWorkitem : this.allWorkItem;
    this.low = this.workItems.filter(x => x.level === 'low').length;
    this.high = this.workItems.filter(x => x.level === 'high').length;
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
}
