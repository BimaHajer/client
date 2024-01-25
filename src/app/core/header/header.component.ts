import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, boldIcon, boltIcon, bugIcon, certificateIcon, sadFaceIcon, shieldIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import {userIcon,homeIcon } from '@cds/core/icon';
ClarityIcons.addIcons(userIcon,homeIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
