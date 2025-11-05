import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title:string = 'for-angular';
  users = ["Yash","Steve","Randy","Kyla","Manas"];

  students =[
    {name:'Yash',age:20,email:'yash@example.com'},
    {name:'Sam', age:22,email:'sam@example.com'},
    {name:'Anish',age:24,email:'anish@example.com'}
  ]

  getName(name:string){
    console.log(name);
  }
}
