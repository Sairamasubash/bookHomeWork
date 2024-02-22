import { Component } from '@angular/core';
import { WLService } from '../WS/ws.service';

@Component({
  selector: 'app-NWL',
  templateUrl: './nwl.component.html',
  styleUrl: './nwl.component.scss'
})
export class NWLComponent 
{
  swl = false;

  wl: string[] = [];

  constructor(private wls: WLService) { }

  ngOnInit() 
  {
    this.wls.swl$.subscribe(display => this.swl = display);

    this.wls.wl$.subscribe((wl) => 
    {
      this.wl = [...wl];
    })
  }

  deleteWish(bName: string) 
  {
    this.wls.wlDelete(bName);
  }
}
