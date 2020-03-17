import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientNoteComponent } from './patient-note/patient-note.component';
import { ExamineInstructionsComponent } from './examine-instructions/examine-instructions.component';


const routes: Routes = [
  {path:'',redirectTo:"patientNote",pathMatch:'full'},
  {path:'patientNote',component:PatientNoteComponent},
  {path:'examineInstruction',component:ExamineInstructionsComponent},
  {path:'**',redirectTo:'patientNote'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
