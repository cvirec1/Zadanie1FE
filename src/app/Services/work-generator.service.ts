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
  private allWorkItem: WorkItem[] = [];
  private filtredWorkitem: WorkItem[] = [];

  get countLowWorkItem(): number {
    return this.low;
  }

  get countHighWorkItem(): number {
    return this.high;
  }

  get workItems(): WorkItem[]{
    return this.filterText ? this.filtredWorkitem : this.allWorkItem;
  }

  constructor() { }

  filter(text: string) {
    this.filterText = text;
    this.filtredWorkitem = this.allWorkItem.filter(x => x.workName.includes(text));
    this.setFooter();
  }  

  generateWorkList() {
    for (let i = 0; i < 5000; i++) {
      this.allWorkItem.push({
        id : i,
        workName : this.stringGenerator(),
        point : this.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high'
      } as WorkItem);
    }
    this.setFooter();
  }

  addWorkItem(title: string) {
    if(title.length > 0) {
      this.allWorkItem.push({
        id: 0,
        workName: title,
        point: this.numberGenerator(),
        level: this.generatePoint < 0.5 ? 'low' : 'high'
      }as WorkItem);
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
    this.generatePoint = Math.round(Math.random() * 10) / 10 
    return this.generatePoint;
  }


  private setFooter() {
    this.low = this.workItems.filter(x => x.level === 'low').length;
    this.high = this.workItems.filter(x => x.level === 'high').length;
  }
}
