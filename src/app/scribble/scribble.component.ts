import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scribble',
  templateUrl: './scribble.component.html',
  styleUrls: ['./scribble.component.css']
})
export class ScribbleComponent implements OnInit {
  @Input() scribbles: string[];
  @Output() resetScribble = new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit() {
  }

  resetScribbler() {
    this.resetScribble.emit(true);
  }

}
