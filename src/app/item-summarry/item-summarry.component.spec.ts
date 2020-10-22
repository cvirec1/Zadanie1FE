import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
