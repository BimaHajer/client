import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule
  ],exports:[ HomeComponent]
})
export class HomeModule { }
