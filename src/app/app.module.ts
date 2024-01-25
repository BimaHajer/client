import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
UserModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdsModule, ClarityModule,ClrIconModule,FormsModule ,
    CoreModule,HomeModule,AuthModule,UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
