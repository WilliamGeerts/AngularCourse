import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _num: number = 0;


  constructor() { }

  increment(){
    this._num++;
  }

  get num(): number{
    return this._num;
  }
}
