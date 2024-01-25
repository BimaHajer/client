import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, boldIcon, boltIcon, bugIcon, certificateIcon, sadFaceIcon, shieldIcon, storeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user=new User()
users=[{ id:1, name:'hajer',creation:'24/01/2024',color:"red"},
{ id:2, name:'Ali',creation:'24/01/2024',color:"green"},
{ id:3, name:'Sami',creation:'24/01/2024',color:"blue"}]
}
