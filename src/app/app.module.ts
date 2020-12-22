import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReduxModule } from './redux/redux.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core-modul/core.module';
import { ComponentModule } from './component/component.module';
import { WorkItemModule } from './component/work-content/work-item.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReduxModule,
    SharedModule,
    CoreModule,
    ComponentModule,
    WorkItemModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
  }),

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
