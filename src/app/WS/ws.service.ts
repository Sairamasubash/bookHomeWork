import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WLService 
{
  private swl = new BehaviorSubject<boolean>(false);

  private wl = new BehaviorSubject<string[]>([]);

  swl$ = this.swl.asObservable();

  wl$ = this.wl.asObservable()

  constructor() { }

  showWL() 
  {
    this.swl.next(!this.swl.value);
  }

  wlAdd(bName: string) 
  {
    this.wl.next([...this.wl.value.filter(name => name !== bName), bName]);
  }

  wlDelete(bName: string) 
  {
    this.wl.next([...this.wl.value.filter(name => name !== bName)])
  }
}
