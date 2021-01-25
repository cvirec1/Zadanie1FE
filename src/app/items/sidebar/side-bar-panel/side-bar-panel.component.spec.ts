import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';
import { provideMockStore } from '@ngrx/store/testing';
import { SideBarPanelComponent } from './side-bar-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { workItem } from 'src/app/shared/workItem.mock';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WorkItemsRoutingModule } from '../../work-item-routing.module';
import { ItemSummarryComponent } from '../side-bar-summary/item-summarry.component';
import { WorkListComponent } from '../side-bar-work-list/work-list.component';
import { SideBarSearchComponent } from '../side-bar-search/side-bar-search.component';

fdescribe('SideBarPanelComponent', () => {
  let component: SideBarPanelComponent;
  let fixture: ComponentFixture<SideBarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        WorkItemsRoutingModule,
        SharedModule
      ],
      declarations: [
        SideBarPanelComponent,
        SideBarSearchComponent,
        ItemSummarryComponent,
        WorkListComponent
       ],
      providers: [
        {
          provide: WorkGeneratorService,
          usevalue: {}
        },
        provideMockStore({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPanelComponent);
    component = fixture.componentInstance;
    component.items = workItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
