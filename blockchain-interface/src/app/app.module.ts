import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //add
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitationFieldsComponent } from './solicitation-fields/solicitation-fields.component';
import { SubmittedPageComponent } from './submitted-page/submitted-page.component';
import { IonicModule } from '@ionic/angular'; 

@NgModule({
  declarations: [
    AppComponent,
    SolicitationFieldsComponent,
    SubmittedPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
