import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorkContentComponent } from './work-content/work-content.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SideBarPanelComponent } from './side-bar-panel/side-bar-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkContentComponent,
    SearchInputComponent,
    SideBarPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
