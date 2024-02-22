import { Component, Input } from '@angular/core';
import { BR } from '../extra/BR.interface';
import { WLService } from '../WS/ws.service';

@Component({
  selector: 'app-BC',
  templateUrl: './BC.component.html',
  styleUrl: './BC.component.scss'
})
export class BCComponent 
{
  @Input() bookInfo: BR | undefined;

  constructor(private wls: WLService) { }

  bookClick()
  {
    if (this.bookInfo !== undefined) 
    {
      this.wls.wlAdd(this.bookInfo.title);
    }
  }
}
