import { ComponentFixture, TestBed } from '@angular/core/testing';
import { workItemLevelCount } from 'src/app/shared/workItem.mock';

import { ItemSummarryComponent } from './item-summarry.component';

describe('ItemSummarryComponent', () => {
  let component: ItemSummarryComponent;
  let fixture: ComponentFixture<ItemSummarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSummarryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSummarryComponent);
    component = fixture.componentInstance;

    component.summaryItems = workItemLevelCount;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
