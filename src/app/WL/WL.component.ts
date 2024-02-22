import { Component } from '@angular/core';
import { WLService } from '../WS/ws.service';

@Component({
  selector: 'app-WL',
  templateUrl: './WL.component.html',
  styleUrl: './WL.component.scss'
})
export class WLComponent 
{
  constructor(private wls: WLService) { }

  clickWish() 
  {
    this.wls.showWL();
  }
}
