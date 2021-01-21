import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkGeneratorService } from 'src/app/core/work-generator.service';
import { provideMockStore } from '@ngrx/store/testing';
import { SideBarPanelComponent } from './side-bar-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { workItem } from 'src/app/shared/workItem.mock';

describe('SideBarPanelComponent', () => {
  let component: SideBarPanelComponent;
  let fixture: ComponentFixture<SideBarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ SideBarPanelComponent ],
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
