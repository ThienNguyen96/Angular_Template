import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import {FormsModule} from '@angular/forms';
import { OtherLifecycleComponent } from './other-lifecycle/other-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    OtherLifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
