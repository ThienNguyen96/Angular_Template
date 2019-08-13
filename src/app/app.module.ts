import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';
import { ErrorValidateComponent } from './components/error-validate/error-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenFormComponent,
    ErrorValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
