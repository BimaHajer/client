import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,ClarityModule, ClrIconModule,FormsModule
  ],
  exports:[UserComponent]
})
export class UserModule { }
