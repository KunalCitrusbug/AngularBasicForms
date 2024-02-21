import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  userList: { [key: number]: { name: string, email: string, gender: string, age: number } } = {};
  ngOnInit(): void {
    
    const userDataString = localStorage.getItem('user_data');
    if (userDataString) {
      this.userList = JSON.parse(userDataString) as { [key: number]: { name: string, email: string, gender: string, age: number } }; 
      console.log(this.userList);
  }
  
  }
  deleteUser(userId: any): void {
    // Remove the user with the given userId from local storage
    if (userId in this.userList) {
      delete this.userList[userId];
      localStorage.setItem('user_data', JSON.stringify(this.userList));
    }
  }
}
