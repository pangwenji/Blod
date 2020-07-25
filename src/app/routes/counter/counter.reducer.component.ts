import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {
   conuter$:Observable<number>;
  constructor(private store:Store<{couter:number}>) {
    this.conuter$=store.pipe(select('couter'))
   }

  ngOnInit(): void {
  }
  goforward():void{

  }
 stoping():void{

 }
 gobacking():void{
   
 } 

}
