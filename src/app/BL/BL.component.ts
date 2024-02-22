import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BSService } from '../BS/bs.service';
import { BR } from '../extra/BR.interface';

@Component({
  selector: 'app-BL',
  templateUrl: './BL.component.html',
  styleUrl: './BL.component.scss'
})
export class BLComponent 
{
  listOfBooks: BR[] = [];

  rxjsSub: Subscription | undefined;

  constructor(private bls: BSService) { }

  ngOnInit() 
  {
    this.rxjsSub = this.bls.getBooksTwo().subscribe((allBooks) => 
    { 
      this.listOfBooks = [...allBooks]; 
    });
  }

  ngOnDestroy() 
  {
    this.rxjsSub?.unsubscribe();
  }
}
