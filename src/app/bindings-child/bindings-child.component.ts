import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bindings-child',
  templateUrl: './bindings-child.component.html',
  styleUrls: ['./bindings-child.component.css']
})
export class BindingsChildComponent implements OnInit {
  @Input() appState: string;
  @Input() appClass: string;
  @Input() appCounter: number;
  @Input() numberNature: string;
  @Output() modifyParentCount = new EventEmitter<number>();
  counter: number = 1;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  childIncrementor() {
    this.counter += 1;
    this.modifyParentCount.emit(this.counter);
  }

}
