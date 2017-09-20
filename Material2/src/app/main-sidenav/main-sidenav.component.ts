import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.css']
})
export class MainSidenavComponent implements OnInit {

   menulists: any = [
    {
      name: 'Dashboard',
      link : '/dashboard'
    },
    {
      name: 'Buttons',
      link : '/buttons'
    },
    {
      name: 'Floating Action Button',
      link : '/floating-action-button'
    },
    {
      name: 'Cards',
      link : '/cards'
    },
    {
      name: 'Chips',
      link : '/chips'
    },
    {
      name: 'Data tables',
      link : '/data-tables'
    },
    {
      name: 'Dialogs',
      link : '/dialogs'
    },
    {
      name: 'Dividers',
      link : '/dividers'
    },
    {
      name: 'Expansion panels',
      link : '/expansion-panels'
    },
    {
      name: 'Grid lists',
      link : '/grid-lists'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectedMenuItem(a) {
    // alert(a.link);
    this.router.navigateByUrl(a.link);
  }

}
