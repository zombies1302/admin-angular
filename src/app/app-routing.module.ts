import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LoginGuard } from './login.guard';
import { UserComponent } from './user/user.component';





const routes: Routes = [
{path:'',component:DangnhapComponent},
{path:'sanpham',component:SanphamComponent,canActivate:[LoginGuard]},
{path:'profile',component:UserComponent,canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
