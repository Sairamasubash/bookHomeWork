import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BSService } from '../BS/bs.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.scss'
})
export class SearchBoxComponent {

  inputSearch = "";

  constructor(private bsservice: BSService) { }

  searchBox() 
  {
    this.bsservice.startLooking(this.inputSearch);
  }

}
