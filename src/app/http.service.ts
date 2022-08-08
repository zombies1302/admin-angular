import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private h:HttpClient) { }
  callheader(){
    let headers = new HttpHeaders();
    let a = localStorage.getItem('token')||'';
    return headers = headers.append('Authorization','Bearer '+ a )

  }

  getSanPham(){
    // console.log(headers)
    return this.h.get('https://api-mutosi.newweb.vn/v1/products?sort[id]=desc&limit=10&store_id=88'
      ,{ headers: this.callheader()});
  }
  getLoai(){
    return this.h.get('https://api-mutosi.newweb.vn/v1/categories',{ headers: this.callheader()})
  }
  addSanPham(data:any){
    return this.h.post('https://api-mutosi.newweb.vn/v1/products',data,{ headers: this.callheader()})

  }
  deleteSanPham(id:number){
    return this.h.delete('https://api-mutosi.newweb.vn/v1/products/'+id,{ headers: this.callheader()})
  }
  getUserInfo(){
    return this.h.get('https://api-mutosi.newweb.vn/v1/users/profile',{ headers: this.callheader()})
  }
  login(username:string='', password:string=''){    
    const userInfo = { code:username, password:password }
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
    return this.h.post('https://api-mutosi.newweb.vn/auth/login'
      , JSON.stringify(userInfo) , {headers:headers, responseType: 'text'}) 

  }
  logout() {
    localStorage.removeItem("token");
  }
  public checkLogin() {
    let token = localStorage.getItem('token')||'';
    if(token == '') return false
      else return true

    }
}
