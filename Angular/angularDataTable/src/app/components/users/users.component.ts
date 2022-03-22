import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/services/users/user.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: Users [] = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url ='https://jsonplaceholder.typicode.com/users'
    this.http.get<Users []>(url).subscribe((res)=>{
      this.allUsers = res
      this.dtTrigger.next(this.allUsers);
    })
    return this.allUsers;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
