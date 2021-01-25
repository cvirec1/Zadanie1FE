import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkItemComponent } from '../../workItem/work-item.component';

import { SideBarSearchComponent } from './side-bar-search.component';

describe('SideBarSearchComponent', () => {
  let component: SideBarSearchComponent;
  let fixture: ComponentFixture<SideBarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        SideBarSearchComponent,
        WorkItemComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');

    spyOn(component.filterItems, 'emit');

    component.priorityFilter.setValue('workItems');
    expect(input.value).toBe('workItems');

    tick(51);
    fixture.detectChanges();

    expect(component.filterItems.emit).toHaveBeenCalled();
    expect(component.filterItems.emit).toHaveBeenCalledWith('workItems');
  }));

  it('should emit filter with change value', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');

    spyOn(component.filterItems, 'emit');

    component.priorityFilter.setValue('workItems');
    expect(input.value).toBe('workItems');

    tick(49);
    component.priorityFilter.setValue('work');

    tick(51);
    expect(component.filterItems.emit).toHaveBeenCalled();
    expect(component.filterItems.emit).toHaveBeenCalledWith('work');
  }));
});
