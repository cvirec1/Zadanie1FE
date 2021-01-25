import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxModule } from './redux/redux.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { WorkItemModule } from './items/work-item.module';
import { HomeModule } from './home/home.module';
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
    HomeModule,
    WorkItemModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
  }),

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
