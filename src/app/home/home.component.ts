import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, boldIcon, boltIcon, bugIcon, certificateIcon, sadFaceIcon, shieldIcon, storeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import {userIcon,homeIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon,homeIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon,storeIcon);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  test=2
  show=true
}
