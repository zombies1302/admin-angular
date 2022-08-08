import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {

  constructor(private h:HttpService) { }
  listSanPham:any;
  listLoai:any;
  ngOnInit(): void {
    this.listSanPham = this.h.getSanPham().subscribe(
      (e)=>{
        let data = Object.values(e)
        console.log(data[0])
        return this.listSanPham = data[0]

      })
    this.listLoai = this.h.getLoai().subscribe(
      (e)=>{
        let data = Object.values(e)
        console.log(data[0])
        return this.listLoai = data[0]
      }

      )
  }
  themsp(value:any){
    let data = {
      code: value.code,
      name:value.name,
      short_description:value.motangan,
      category_ids:value.loai,
      type:"SERVICE",
      specification_id:62,
      weight_class:value.weight_class,
      description:value.mota,
      store_id:88,


    }
    console.log(data)
    this.h.addSanPham(data).subscribe(data=>{
      console.log(data)
      Notify.success('Thêm thành công!')
      
    })



  }
  deleteSanPham(id:any){
    Confirm.show('Xoá Sản Phẩm','Bạn có thực sự muốn xoá sản phẩm này?','Có','Không',
      () => {
        this.h.deleteSanPham(id).subscribe(e=>{
          let data = this.listSanPham
          let index = data.findIndex((x: any) => x.id == id);
          data.splice(index,1)
          Notify.failure(`${Object.values(e)}`)
        })
      },
      () => {
        // alert('If you say so...');
      },{},);
  }

}
