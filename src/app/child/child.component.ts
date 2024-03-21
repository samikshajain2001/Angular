import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() myData:string='';
  @Input() myDataArray:string[]=[];
  @Input() myDataObj:any={};
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
