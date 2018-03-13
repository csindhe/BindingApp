import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = "Binding App";
  appState: boolean = false;
  myClass: string = "my"+this.appState+"color";
  myBckClass: string = "my"+this.appState+"bckcolor";
  counter: number = 1;
  numberNature: string;
  scribble: string[] = [];
  scribblePad: any = [];
  arrLength: number;

  constructor() {
    this.deriveOddEven();
  }

  toggleState(): void {
    this.appState = !this.appState;
    this.myClass = "my"+this.appState+"color";
    this.myBckClass = "my"+this.appState+"bckcolor";
  }

  changeName(currAppName: string): void{
    this.appName = currAppName;
  }

  incrementor() {
    this.counter += 1;
    this.deriveOddEven();
  }

  deriveOddEven() {
    if(this.counter % 2 === 0){
      this.numberNature = "Even Number";
    }else{
      this.numberNature = "Odd Number";
    }
  }

  interpolatedIncrement(count: number) {
    this.counter = this.counter + count;
    this.deriveOddEven();
  }

  scribbler(scrib: HTMLInputElement) {
    this.scribble[this.scribble.length - 1] = scrib.value;
    if(this.scribblePad.length === 0){
      this.arrLength = 0;
    }else{
      this.arrLength = this.arrLength + 1;
    }
    this.scribblePad[this.arrLength] = scrib.value;
    scrib.value = '';
  }

  resetScribbler(reset: boolean){
    if(reset){
      this.scribblePad = [];
    }
  }

}
