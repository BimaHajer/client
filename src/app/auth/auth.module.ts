import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

import { ClarityModule } from '@clr/angular';

import { ClrIconModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
    ClarityModule,ClrIconModule,FormsModule
    
  ],
  exports:[ LoginComponent]
})
export class AuthModule { }
