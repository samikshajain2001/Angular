import { Component } from '@angular/core';
import { Sutdent } from '../sutdent';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  
  resetForm(myForm:NgForm){
    myForm.resetForm();
  }

  selectedHobbies: string[]=[];
  onChange(e:any){
    let selectedValue=e.target.value;
    let checked=e.target.checked;
    if(checked){
      this.selectedHobbies.push(selectedValue);
    }
    else{
      let index=this.selectedHobbies.indexOf(selectedValue);
      this.selectedHobbies.splice(index,1);
    }
    console.log(this.selectedHobbies);
  }

  std=new Sutdent();
  constructor(){
    this.std.country="";
  }

  save(formData:any){
    // const std=new Sutdent(formData.value.name, formData.value.age, formData.value.email);
    // console.log(std);
    console.log(formData.value);
  }


}
