import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';

declare const $: any;
declare const hljs: any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {

  html = `
    <button md-button>Flat button</button>
    <button md-raised-button>Raised button</button>
    <button md-fab><md-icon>check</md-icon></button>
    <button md-mini-fab><md-icon>check</md-icon></button>

    <!-- Link Buttons  -->

    <a md-button routerLink=".">Flat button</a>
    <a md-raised-button routerLink=".">Raised button</a>
    <a md-fab routerLink="."><md-icon>check</md-icon></a>
    <a md-mini-fab routerLink="."><md-icon>check</md-icon></a>
  `;

  css = `
    /* nothing */
  `;

  javascript = `

    import { MdButtonModule } from '@angular/material';

  `;

  constructor() { }

  onTabClick($event: any){
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    // hljs.initHighlighting();

    // alert();
  }

  ngOnInit() {

    // $(document).ready(function() {
    //   $('pre code').each(function(i, block) {
    //     hljs.highlightBlock(block);
    //   });
    // });

  }

}
