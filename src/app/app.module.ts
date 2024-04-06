import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDeatilsComponent } from './components/item-deatils/item-deatils.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { PerentComponent } from './components/perent/perent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDeatilsComponent,
    ItemOutputComponent,
    PerentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
