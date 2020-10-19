import { Injectable } from '@angular/core';
import { WorkItem } from './workItem';

@Injectable({
  providedIn: 'root'
})
export class WorkGeneratorService {

  low: number;
  high: number;

  private filterText = '';
  private allWorkItem: WorkItem[] = [];
  private filtredWorkitem: WorkItem[] = [];

  constructor() { }

  filter(text: string) {
    this.filterText = text;
    this.filtredWorkitem = this.allWorkItem.filter(x => x.workName.includes(text));
    this.setFooter();
  }

  get workItems(): WorkItem[]{
    return this.filterText ? this.filtredWorkitem : this.allWorkItem;
  }

  generateWorkList() {
    for (let i = 0; i < 500; i++) {
      this.allWorkItem.push({
        id : i,
        workName : this.stringGenerator(),
        point : this.numberGenerator(),
      } as WorkItem);
    }
    this.setFooter();
  }

  addWorkItem(title: string) {
    if(title.length > 0) {
      this.workItems.push({
        id: 0,
        workName: title,
        point: this.numberGenerator()
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
    return Math.round(Math.random() * 10) / 10;
  }


  private setFooter() {
    this.low = this.workItems.filter(x => x.point <= 0.5).length;
    this.high = this.workItems.filter(x => x.point > 0.5).length;
  }
}
