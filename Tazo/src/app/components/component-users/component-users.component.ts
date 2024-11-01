import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-component-users',
  templateUrl: './component-users.component.html',
  styleUrls: ['./component-users.component.css']
})
export class ComponentUsersComponent  {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  users: Users[] = [
    {
      FirstName: 'Tazo',
      Age: 19,
      LastName: 'Shukakidze'
    }
  ]

  sendData(){
    this.parentFunction.emit(this.users);
  }
  
  // @Input() inputData: any = 'data';
  
  // ngOnInit(): void {
  //   console.warn(this.inputData);
  //   }

// users:Users [] = [
// {
// FirstName: 'Tazo',
// LastName: 'Shukakidze',
// },
// {
// FirstName: 'Lekso',
// LastName: 'Shukakidze',
// }
// ]



}
