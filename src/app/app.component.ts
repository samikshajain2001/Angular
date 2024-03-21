import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './services/student-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learn with passion';
  posts:any;
  
  constructor(private post:StudentServiceService){}
  
  ngOnInit(): void {
    this.post.getPosts().subscribe(response => {
      this.posts=response;
      console.log(this.posts);
    })
  }


  //public msg="";


  // name= 'Samiksha Jain';
  // fruits=["Apple","Banana","Mango","Grapes"];
  // obj={
  //   name:"Kumar",
  //   age:24,
  //   isMarried:true
  // }
  // changeData(){
  //   this.name='Riya Bansal';
  // }
  // helloMessage(){
  //   return "Hello Samiksha";
  // }
}
