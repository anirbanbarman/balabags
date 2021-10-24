import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leather-website';

  ngOnInit(){
    AOS.init();
  }


  onActivate(event:any) {
    window.scroll(0,0);

  }

}
