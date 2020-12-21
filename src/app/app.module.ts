import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorComponent } from './validator/validator.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReduxModule } from './redux/redux.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core-modul/core.module';
import { ComponentModule } from './component/component.module';
import { WorkItemModule } from './component/work-content/work-item.module';
@NgModule({
  declarations: [
    AppComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReduxModule,
    ComponentModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
  }),
    SharedModule,
    CoreModule,
    ComponentModule,
    WorkItemModule,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
