import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent,
    SanphamComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
