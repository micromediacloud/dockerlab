import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from './header/header.component';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { ExamineInstructionsComponent } from './examine-instructions/examine-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientNoteComponent,
    ExamineInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
