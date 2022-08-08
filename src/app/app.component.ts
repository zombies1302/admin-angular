import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private h:HttpService,private router: Router,){

  }
  title = 'asm';
  Logined() { return this.h.checkLogin()}
  Logout(){ 
    this.h.logout();
    this.router.navigateByUrl('/');
    

  }

}
