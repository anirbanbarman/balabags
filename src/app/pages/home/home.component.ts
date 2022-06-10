import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var pro1:any = document.getElementById("pro1");
   var  pro2:any = document.getElementById("pro2");
   var  pro3:any = document.getElementById("pro3");
   var  pro4:any = document.getElementById("pro4");
   var  pro5:any = document.getElementById("pro5");
    pro1.onmouseenter = function(){
        pro2.style="width:33%; transform:translateX(27%); transition:0.4s";
    }
    pro1.onmouseleave = function(){
        pro2.style="width:50%; transform:translateX(0%); transition:0.4s";
    }
    pro3.onmouseenter = function(){
        pro2.style="width:75%; transform:translateX(0%); transition:0.4s; ";
        pro4.style="width:25%; transform:translateX(0%)skewX(-20deg); transition:0.4s";
        this.style="width:90%; transition:0.4s"
    }
    pro3.onmouseleave = function(){
        pro2.style="width:50%; transform:translateX(0%); transition:0.4s";
        pro4.style="width:50%; transform:translateX(0%) skewX(-20deg); transition:0.4s";
        this.style="width:50%; transition:0.4s"
    }
    pro4.onmouseenter = function(){
        pro2.style="width:75%; transform:translateX(0%); transition:0.4s; ";
        pro3.style="width:45%; transform:translateX(0%)skewX(-20deg); transition:0.4s";
        this.style="width:75%; transition:0.4s"
    }
    pro4.onmouseleave = function(){
        pro2.style="width:50%; transform:translateX(0%); transition:0.4s";
        pro3.style="width:50%; transform:translateX(0%) skewX(-20deg); transition:0.4s";
        this.style="width:50%; transition:0.4s"
    }
    pro5.onmouseenter = function(){
        pro2.style="width:33%; transform:translateX(-27%); transition:0.4s";
    }
    pro5.onmouseleave = function(){
        pro2.style="width:50%; transform:translateX(0%); transition:0.4s";
    }

  }

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    nav:false,
    autoplay:false,
    margin:15,
    // navText: ['left', 'right'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  }
}
