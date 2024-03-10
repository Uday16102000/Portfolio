import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
//Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}