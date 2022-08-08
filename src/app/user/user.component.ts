import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any;
  constructor(private h:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.userData = this.h.getUserInfo().subscribe(
      (e)=>{
        let data = Object.values(e)
        console.log(data[0])
        return this.userData = data[0]

      })
  }

}
