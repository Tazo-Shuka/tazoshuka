import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cucumber';
  // name = 'Tazo';
  // lastName = 'Shukakidze';
  
  // Welcome(){
  //   return 'Hello '+ this.name + ' ' + this.lastName; 
  // }

// users: Users[] = [
//   {
//     FirstName: 'Tazo',
//     Age: 19,
//     LastName: 'Shukakidze'
//   },
//   {
//     FirstName: 'Mariam',
//     Age: 19,
//     LastName: 'Bardadze'
//   },
//   {
//     FirstName: 'Lekso',
//     Age: 14,
//     LastName: 'Shukakidze'
//   }
// ]

readData:any;

parentFunction(data:any){
  console.log(data);
  this.readData=data;
}

}
