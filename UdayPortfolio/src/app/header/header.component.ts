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
handleScrollStart() {
  console.log('scroll start');
}

handleScroll(ev: CustomEvent<ScrollDetail>) {
  console.log('scroll', ev.detail);
}

handleScrollEnd() {
  console.log('scroll end');
}
}