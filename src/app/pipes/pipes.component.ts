import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
    public channelName="learning never ends";
    obj={
        name:"Kumar",
        age:24,
        isMarried:true
      }
      myDate=new Date;
}
