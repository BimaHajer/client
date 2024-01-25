import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule,FormsModule
  ],
  exports:[
    CoreComponent,
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
