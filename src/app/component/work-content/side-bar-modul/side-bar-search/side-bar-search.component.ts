import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar-search',
  templateUrl: './side-bar-search.component.html',
  styleUrls: ['./side-bar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarSearchComponent implements OnInit {

  @Output() filterItems: EventEmitter<string> = new EventEmitter();

  priorityFilter = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.priorityFilter.valueChanges
    .pipe(
        debounceTime(50),
        distinctUntilChanged()
    )
    .subscribe(value => {
        this.filterItems.emit(value);
    });
  }

}

