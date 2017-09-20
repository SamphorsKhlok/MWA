import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


declare const $: any;
declare const hljs: any;


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  animations: [
    trigger('hoverState', [
      state('inactive', style({
        backgroundColor: '#eee',
        // transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        // transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TablesComponent implements OnInit {

  state: String = 'inactive';

    html_exp_1 = `
    <md-card>
      <p>Example Card</p>
    </md-card>
  `;

  css_exp_1 = `
    .example-card {
      width: 400px;
    }

    .example-header-image {
      background-image: url('assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `;

  javascript_exp_1 = `
    import { MdCardModule } from '@angular/material';
  `;

  selectedAll = false;

  tableData = [
    { state: true, food: 'Frozen yogurt', calories: '159', fat: '6.0', carbs: '24'},
    { state: false, food: 'apple', calories: '25', fat: '1.0', carbs: '55'},
    { state: true, food: 'banana yogurt', calories: '424', fat: '8.0', carbs: '77'},
    { state: false, food: 'kerasi yogurt', calories: '111', fat: '12.0', carbs: '14'}
  ];

  constructor() { }

  ngOnInit() {
  }

  statusCheckBox() {
    this.selectedAll = this.selectedAll ? true : false;

    if (this.selectedAll === true) {
       this.tableData.forEach(element => {
        element.state =  true;
      });
    } else {
       this.tableData.forEach(element => {
        element.state =  false;
      });
    }


    // this.tableData[0].state = true;
    console.log(this.selectedAll);
  }

  mouseIn() {
    console.log('mouseIn');
    // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }


  onTabClick($event: any){
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

}
