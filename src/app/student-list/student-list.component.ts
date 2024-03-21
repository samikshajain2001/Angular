import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  //providers:[StudentServiceService]
})
export class StudentListComponent implements OnInit{
  
  // public students=[
  //   {name:"Samiksha",age:21,standard:12},
  //   {name:"Riya",age:22,standard:11},
  //   {name:"Anurag",age:20,standard:10}
  // ];
  public students: any;

  // constructor(private std:StudentServiceService){
  //   this.students=std.getStudents();
  //   console.log(this.students);
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
