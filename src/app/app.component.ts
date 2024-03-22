import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './services/student-service.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learn with passion';
  hobbiesArray:string[]=['Reading','Singing','Dancing'];

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    email: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$')]),
    gender: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    accept: new FormControl(false,[Validators.requiredTrue]),
    hobbies: new FormArray([],[Validators.required]) 
  });

  onChange(e:any){
    const checkedValue=e.target.value;
    const checked=e.target.checked;
    //console.log(e.target.value);
    const checkedArray= this.signupForm.get('hobbies') as FormArray;
    if(checked){
      checkedArray.push(new FormControl(checkedValue));
    }
    else{
      let i:number=0;
      checkedArray.controls.forEach((item) => {
        if(item.value == checkedValue){
          checkedArray.removeAt(i);
        }
        i++;
      });
    }
  }

  handleSubmit(){
    console.log(this.signupForm.value);
    
  }

  get f(){
    return this.signupForm.controls;
  }

  //posts:any;
  
  //constructor(private post:StudentServiceService){}
  
  ngOnInit(): void {
    // this.post.getPosts().subscribe(response => {
    //   this.posts=response;
    //   console.log(this.posts);
    // })
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
