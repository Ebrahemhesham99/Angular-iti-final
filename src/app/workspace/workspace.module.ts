import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalWorkspaceComponent } from './personal-workspace/personal-workspace.component';



@NgModule({
  declarations: [
    PersonalWorkspaceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PersonalWorkspaceComponent,
  ]
})
export class WorkspaceModule { }
