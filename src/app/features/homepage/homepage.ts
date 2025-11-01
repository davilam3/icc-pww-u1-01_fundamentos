import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homepage { 


  constructor(){
    setInterval(()=>{
      console.log("*");
      //this.counter += 1;
      this.conterSignal.update((v) => v+1);
    }, 1000                 //contador
    );
  }
    counter = 0;
    //menos renderizado
    conterSignal = signal(0);

    changeValue(value: number){
      //this.counter = this.counter + value;
      this.counter += value; 
      this.conterSignal.update((current)=> current + value);
    }

    resetValue(value: number){
      this.counter = value;
      this.conterSignal.set(value);
    }

}
