import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{

  @Output() public childEvent =new EventEmitter();
  fireEvent(){
    this.childEvent.emit("Hello");
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
