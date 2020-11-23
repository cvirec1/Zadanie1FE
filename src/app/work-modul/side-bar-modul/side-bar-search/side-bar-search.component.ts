import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkGeneratorService } from 'src/app/core-modul/work-generator.service';

@Component({
  selector: 'app-side-bar-search',
  templateUrl: './side-bar-search.component.html',
  styleUrls: ['./side-bar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarSearchComponent implements OnInit {

  constructor( private workService: WorkGeneratorService ) { }

  ngOnInit(): void {
  }

  filter(text: string): void {
    this.workService.filter(text);
  }
}

