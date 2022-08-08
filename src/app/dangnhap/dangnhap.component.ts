import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor( private router: Router,private h:HttpService) { }

  ngOnInit(): void {
    if (this.h.checkLogin() == true) {
      this.router.navigate(['/sanpham']);        
    }
  }

  xulyDN(data:any){
    console.log(data)
    this.h.login( data.username, data.password).subscribe( 
      res =>{       
        var data = JSON.parse(res);
        console.log("Đăng nhập thành công ", res);  
        // let headers = new HttpHeaders()  

        // headers = headers.set('Authorization',data.token)
        // console.log(headers) 

        // const expiresAt = moment().add(d.expiresIn,'second');
        localStorage.setItem('token', data.token);
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        this.router.navigateByUrl('/sanpham');
      },
      error => {
        console.log('oops', error);
        alert("Thông tin đăng nhập không đúng")
        this.router.navigateByUrl('/');
      }
      )
  }

}
