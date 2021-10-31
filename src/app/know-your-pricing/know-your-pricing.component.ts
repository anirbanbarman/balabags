import { Component, OnInit, ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto'



@Component({
  selector: 'app-know-your-pricing',
  templateUrl: './know-your-pricing.component.html',
  styleUrls: ['./know-your-pricing.component.scss']
})
export class KnowYourPricingComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  showChart: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  showGraph(){

    this.showChart=!this.showChart;

    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
var myChart = new Chart(this.ctx, {
  type: 'pie',
  data: {
    labels: ['Labour cost', 'Material cost'],
    datasets: [{
      label: '# of Tomatoes',
      data: [70, 30],
      backgroundColor: [
        '#c70000',
        '#799bd9',

      ],
      borderColor: [
        '#c70000',
        '#799bd9',


      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});


  }
}
