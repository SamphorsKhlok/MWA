import { Component, OnInit } from '@angular/core';


declare const $: any;
declare const hljs: any;


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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

  // card 3
  html_exp_3 = `
    <md-card style="max-width:300px;">
      <md-card-header>
        <md-card-title><h3>Card Title</h3></md-card-title>
        <md-card-subtitle>Subtitle</md-card-subtitle>
      </md-card-header>
      <img md-card-image src="../../../assets/img/shiba2.jpg">
      <md-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
          very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
        </p>
      </md-card-content>
      <md-card-actions>
        <button md-button>LIKE</button>
        <button md-button>SHARE</button>
      </md-card-actions>
    </md-card>
  `;

  css_exp_3 = `
    .example-card {
      width: 400px;
    }

    .example-header-image {
      background-image: url('assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `;

  javascript_exp_3 = `
    import { MdCardModule } from '@angular/material';
  `;

  // card 4
  html_exp_4 = `
    <md-card style="max-width:300px;">
      <img md-card-image src="../../../assets/img/shiba2.jpg">
      <md-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
          very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
        </p>
      </md-card-content>
      <md-card-actions>
        <button md-button>LIKE</button>
        <button md-button>SHARE</button>
      </md-card-actions>
    </md-card>
  `;

  css_exp_4 = `
    .example-card {
      width: 400px;
    }

    .example-header-image {
      background-image: url('assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `;

  javascript_exp_4 = `
    import { MdCardModule } from '@angular/material';
  `;

   // card 5
  html_exp_5 = `
    <md-card style="width:500px;">
      <div fxLayout="row" >
        <div fxFlex="50" style="padding-right: 10px;">
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
            very well with mountainous terrain, the Shiba Inu was originally bred for hunting.
          </p>
          <md-card-actions style="margin-bottom:0px; padding-bottom:0px">
            <button md-button>LIKE</button>
            <button md-button>SHARE</button>
          </md-card-actions>
        </div>
        <div fxFlex="50">
          <img  src="../../../assets/img/shiba2.jpg" style="width:100%; margin-top: 0px">
        </div>
      </div>
    </md-card>
  `;

  css_exp_5 = `
    .example-card {
      width: 400px;
    }

    .example-header-image {
      background-image: url('assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `;

  javascript_exp_5 = `
    import { MdCardModule } from '@angular/material';
  `;

  constructor() { }

  ngOnInit() {
  }

  onTabClick($event: any){
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

}
